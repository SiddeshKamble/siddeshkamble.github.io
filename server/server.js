// server/server.js (NO OpenAI)
import fs from "fs";
import path from "path";
import express from "express";
import cors from "cors";

const KB_PATH = path.join(process.cwd(), "server", "kb", "index.json");
if (!fs.existsSync(KB_PATH)) {
  console.error("KB missing. Run: node server/scripts/ingest.js");
  process.exit(1);
}

const kb = JSON.parse(fs.readFileSync(KB_PATH, "utf-8"));

const STOPWORDS = new Set([
  "a","an","the","and","or","but","to","of","in","on","for","with","as","at","by","from",
  "is","are","was","were","be","been","being","it","this","that","these","those",
  "i","me","my","you","your","we","our","they","their","he","she","his","her",
  "about","tell","explain","what","which","who","when","where","how","did","do"
]);

function normalize(s) {
  return (s || "").toLowerCase().trim();
}

function tokenize(s) {
  return normalize(s)
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .filter((w) => !STOPWORDS.has(w));
}

function scoreText(queryTokens, text) {
  const t = tokenize(text);
  if (!t.length) return 0;
  const freq = new Map();
  for (const w of t) freq.set(w, (freq.get(w) || 0) + 1);

  let score = 0;
  for (const q of queryTokens) {
    const f = freq.get(q) || 0;
    if (f > 0) score += 1 + Math.log(1 + f);
  }
  return score;
}

function looksLike(q, keywords) {
  const qq = normalize(q);
  return keywords.some((k) => qq.includes(k));
}

function findCompanyFromQuestion(q, companies) {
  const qq = normalize(q);
  return companies.find((c) => qq.includes(normalize(c)));
}

function formatExperienceItem(e) {
  return [
    `${e.title} — ${e.company} (${e.dates})`,
    ...(e.highlights || []).map((h) => `• ${h}`),
    e.tech?.length ? `Tech: ${e.tech.join(", ")}` : null,
  ].filter(Boolean).join("\n");
}

function formatProjectItem(p) {
  return [
    `${p.name}: ${p.description}`,
    p.tech?.length ? `Tech: ${p.tech.join(", ")}` : null,
  ].filter(Boolean).join("\n");
}

function expertiseAnswer() {
  // Pull from resume skills if you want later; for now: strong portfolio-ready response
  return `
Siddesh’s expertise includes:

• Full-Stack Development: React, Next.js, Node.js, REST APIs  
• Backend & Databases: MySQL, PostgreSQL, MongoDB, Prisma, SQL  
• Cloud & DevOps: AWS, GCP, Docker, Kubernetes  
• Conversational AI & ML: Dialogflow, NLP, CNNs, Transfer Learning  
• Analytics & Tools: Power BI, Looker Studio, MLflow

Sources: resume.pdf, portfolio.json
`.trim();
}

function answer(question) {
  const q = normalize(question);
  const qTokens = tokenize(question);

  // ---- WHO IS ----
  if (looksLike(q, ["who is", "tell me about", "about siddesh"])) {
    return `
Siddesh Kamble is a Software Developer and Conversational AI Engineer based in New York.

He builds full-stack applications, cloud-native systems, and conversational AI solutions, with experience at iConsult Collaborative and Quantiphi.

Sources: resume.pdf, portfolio.json
`.trim();
  }

  // ---- EXPERTISE / SKILLS ---- (always answer)
  if (looksLike(q, ["expertise", "skills", "skill", "technologies", "tech stack", "tech"])) {
    return expertiseAnswer();
  }

  // ---- PROJECTS ----
  if (looksLike(q, ["projects", "project", "built"])) {
    const projects = (kb.portfolio.projects || []).slice(0, 6);
    return `
Siddesh’s projects include:

${projects.map((p) => `• ${p.name}`).join("\n")}

Details:
${projects.map((p) => formatProjectItem(p)).join("\n\n")}

Sources: portfolio.json
`.trim();
  }

  // ---- EXPERIENCE ----
  if (looksLike(q, ["experience", "work", "worked", "jobs", "job"])) {
    const exp = kb.portfolio.experience || [];
    return `
Siddesh’s experience includes:

${exp.map((e) => `• ${e.title} — ${e.company} (${e.dates})`).join("\n")}

Sources: portfolio.json
`.trim();
  }

  // ---- COMPANY-SPECIFIC: "What did he do at X?" ----
  if (q.includes(" at ")) {
    const companies = (kb.portfolio.experience || []).map((e) => e.company);
    // also allow shorthand e.g., "iConsult" for "iConsult Collaborative"
    const aliases = [
      ...companies,
      "iConsult",
      "Quantiphi",
    ];

    const company = findCompanyFromQuestion(q, aliases);
    if (company) {
      const match = (kb.portfolio.experience || []).find((e) =>
        normalize(e.company).includes(normalize(company)) || normalize(company).includes(normalize(e.company))
      );

      if (match) {
        return `
At ${match.company}, Siddesh worked as:

${match.title} (${match.dates})

Key work:
${(match.highlights || []).map((h) => `• ${h}`).join("\n")}
${match.tech?.length ? `\nTech: ${match.tech.join(", ")}` : ""}

Sources: portfolio.json
`.trim();
      }
    }
  }

  // ---- FALLBACK: Search resume chunks ----
  if (qTokens.length) {
    const top = (kb.resumeChunks || [])
      .map((r) => ({ ...r, score: scoreText(qTokens, r.text) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    if (top.length) {
      return `
Here’s what I found in the resume related to your question:

${top.map((t, i) => `(${i + 1}) ${t.text.slice(0, 260)}…`).join("\n\n")}

Sources: resume.pdf
`.trim();
    }
  }

  return `I couldn’t find a strong match in the resume/portfolio. Try using a company name, project name, or tech keyword.\n\nSources: resume.pdf, portfolio.json`;
}

const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.post("/api/chat", (req, res) => {
  try {
    const { question } = req.body;
    if (!question) return res.status(400).json({ error: "Missing question" });
    return res.json({ answer: answer(question) });
  } catch (e) {
    return res.status(500).json({ error: String(e.message || e) });
  }
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`✅ Backend running: http://localhost:${PORT}`));
