import fs from "fs";
import path from "path";
import express from "express";
import cors from "cors";

const KB_PATH = path.join(process.cwd(), "server", "kb", "index.json");

if (!fs.existsSync(KB_PATH)) {
  console.error("❌ KB missing. Run: node server/scripts/ingest.js");
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
  const words = tokenize(text);
  const freq = {};

  words.forEach((w) => {
    freq[w] = (freq[w] || 0) + 1;
  });

  let score = 0;

  queryTokens.forEach((q) => {
    if (freq[q]) {
      score += 1 + Math.log(freq[q]);
    }
  });

  return score;
}

function searchKB(query) {
  const tokens = tokenize(query);

  const results = (kb.records || [])
    .map((r) => ({
      ...r,
      score: scoreText(tokens, r.text),
    }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return results;
}

function answer(question) {
  const q = normalize(question);

  // 🔥 Rule-based answers
  if (q.includes("skills") || q.includes("tech")) {
    return `
Skills include:

• Python, SQL, JavaScript  
• FastAPI, Django, Flask  
• LLMs, RAG, LangChain, LangGraph  
• AWS, GCP, Docker  
• PostgreSQL, Redis  
`;
  }

  if (q.includes("experience")) {
    return (kb.portfolio?.experience || [])
      .map((e) => `• ${e.title} at ${e.company} (${e.dates})`)
      .join("\n");
  }

  if (q.includes("projects")) {
    return (kb.portfolio?.projects || [])
      .map((p) => `• ${p.name}`)
      .join("\n");
  }

  if (q.includes("stripe")) {
    const match = (kb.portfolio?.experience || []).find((e) =>
      e.company.toLowerCase().includes("stripe")
    );

    if (match) {
      return `
At Stripe:

${match.highlights.map((h) => `• ${h}`).join("\n")}
`;
    }
  }

  // 🔍 Retrieval fallback
  const results = searchKB(question);

  if (results.length) {
    return `
Here’s what I found:

${results.map((r) => `• ${r.text.slice(0, 200)}...`).join("\n\n")}
`;
  }

  return "I couldn't find relevant information.";
}

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Missing question" });
  }

  const response = answer(question);
  res.json({ answer: response });
});

const PORT = 5050;

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});