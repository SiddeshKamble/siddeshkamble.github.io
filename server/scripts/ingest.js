// server/scripts/ingest.js (NO OpenAI)
import fs from "fs";
import path from "path";
import { PDFParse } from "pdf-parse";

const DATA_DIR = path.join(process.cwd(), "data");
const OUT_DIR = path.join(process.cwd(), "server", "kb");
const OUT_FILE = path.join(OUT_DIR, "index.json");

function chunkText(text, chunkSize = 900, overlap = 150) {
  const clean = (text || "").replace(/\s+/g, " ").trim();
  const chunks = [];
  let i = 0;
  while (i < clean.length) {
    chunks.push(clean.slice(i, i + chunkSize));
    i += chunkSize - overlap;
  }
  return chunks;
}

async function readResumePdfText() {
  const p = path.join(DATA_DIR, "resume.pdf");
  const buf = fs.readFileSync(p);

  const parser = new PDFParse({ data: buf });
  const result = await parser.getText();
  await parser.destroy();

  // robust text extraction (v2 sometimes differs)
  const text =
    (result?.text && String(result.text)) ||
    (Array.isArray(result?.pages) ? result.pages.map((pg) => pg.text || "").join("\n") : "") ||
    "";

  return text;
}

function readPortfolioJson() {
  const p = path.join(DATA_DIR, "portfolio.json");
  return JSON.parse(fs.readFileSync(p, "utf-8"));
}

function portfolioToText(portfolio) {
  const lines = [];
  lines.push("PORTFOLIO EXPERIENCE:");
  for (const e of portfolio.experience || []) {
    lines.push(`${e.title} at ${e.company} (${e.dates})`);
    (e.highlights || []).forEach((h) => lines.push(`- ${h}`));
    if (e.tech?.length) lines.push(`Tech: ${e.tech.join(", ")}`);
    lines.push("");
  }

  lines.push("PORTFOLIO PROJECTS:");
  for (const pr of portfolio.projects || []) {
    lines.push(`${pr.name}: ${pr.description}`);
    if (pr.tech?.length) lines.push(`Tech: ${pr.tech.join(", ")}`);
    lines.push("");
  }

  return lines.join("\n");
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const resumeText = await readResumePdfText();
  const portfolio = readPortfolioJson();
  const portfolioText = portfolioToText(portfolio);

  console.log("resume chars:", resumeText.trim().length);
  console.log("portfolio chars:", portfolioText.trim().length);

  const records = [];

  // Resume chunks
  chunkText(resumeText)
    .filter((c) => c.trim().length > 0)
    .forEach((text, i) => {
      records.push({
        id: `resume.pdf::${i}`,
        source: "resume.pdf",
        chunk_index: i,
        text,
      });
    });

  // Portfolio chunks
  chunkText(portfolioText)
    .filter((c) => c.trim().length > 0)
    .forEach((text, i) => {
      records.push({
        id: `portfolio.json::${i}`,
        source: "portfolio.json",
        chunk_index: i,
        text,
      });
    });

  const kb = {
    created_at: new Date().toISOString(),
    records,
  };

  fs.writeFileSync(OUT_FILE, JSON.stringify(kb, null, 2));
  console.log(`✅ Saved KB: ${OUT_FILE}`);
  console.log(`Records: ${records.length}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
