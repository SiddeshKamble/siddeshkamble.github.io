import fs from "fs";
import path from "path";

const KB_PATH = path.join(process.cwd(), "server", "kb", "index.json");
const PORTFOLIO_PATH = path.join(process.cwd(), "data", "portfolio.json");

// ---------- text utils ----------
const norm = (s) =>
  (s || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function normalizeQuestion(raw) {
  const s = norm(raw);

  // common misspellings / partials for siddesh
  const hasSiddeshLike =
    s.includes("siddesh") ||
    s.includes("siddehs") ||
    s.includes("siddes") ||
    s.includes("sidd") ||
    s.includes("s k");

  // normalize common intents
  if (hasSiddeshLike && (s.includes("tell me about") || s.startsWith("about"))) return "who is siddesh";
  if (s === "give this experience" || s === "give experience" || s === "talk about his experience") return "summarize experience";
  if (s.includes("job experience") || s.includes("work experience") || s === "experience") return "summarize experience";
  if (s.includes("expertise") || s.includes("skill") || s.includes("skillset")) return "expertise";
  if (s.includes("projects") || (s.includes("project") && !s.includes("more about"))) return "list projects";

  return s;
}

// ---------- data loaders ----------
function loadKBRecords() {
  if (!fs.existsSync(KB_PATH)) {
    throw new Error("KB not found. Run ingest and commit server/kb/index.json");
  }
  const kb = JSON.parse(fs.readFileSync(KB_PATH, "utf-8"));
  return (kb.records || []).filter((r) => (r.text || "").trim().length > 0);
}

function loadPortfolio() {
  if (!fs.existsSync(PORTFOLIO_PATH)) {
    throw new Error("data/portfolio.json not found. Commit it to GitHub.");
  }
  return JSON.parse(fs.readFileSync(PORTFOLIO_PATH, "utf-8"));
}

// ---------- skill extraction (medium detail) ----------
function extractSkillsFromResume(records) {
  const resumeText = records
    .filter((r) => r.source === "resume.pdf")
    .map((r) => r.text)
    .join(" ")
    .toLowerCase();

  const skills = {
    languages: [],
    web: [],
    data: [],
    cloud: [],
  };

  const add = (arr, items) => {
    for (const x of items) {
      if (!arr.includes(x)) arr.push(x);
    }
  };

  if (resumeText) {
    add(
      skills.languages,
      ["Python", "Java", "Go", "R", "JavaScript", "TypeScript"].filter((t) =>
        resumeText.includes(t.toLowerCase())
      )
    );

    add(
      skills.web,
      ["React", "Next.js", "Node.js", "Express", "Django", "REST APIs", "Microservices"].filter(
        (t) => resumeText.includes(t.toLowerCase().replace(".", "")) || resumeText.includes(t.toLowerCase())
      )
    );

    add(
      skills.data,
      ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "SQL Server", "ETL", "Data Modeling"].filter(
        (t) => resumeText.includes(t.toLowerCase())
      )
    );

    add(
      skills.cloud,
      ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Power BI", "Looker Studio", "MLflow", "Prisma"].filter(
        (t) => resumeText.includes(t.toLowerCase())
      )
    );
  }

  return skills;
}

// ---------- company + project routing ----------
const COMPANY_ALIASES = [
  { keys: ["quantiphi", "quantiphi inc"], label: "Quantiphi Inc." },
  { keys: ["iconsult", "iconsult collaborative", "i consult"], label: "iConsult Collaborative" },
  { keys: ["markytics", "markytics.ai"], label: "Markytics.AI" },
];

function detectCompany(question) {
  const q = norm(question);
  for (const c of COMPANY_ALIASES) {
    if (c.keys.some((k) => q.includes(k))) return c.label;
  }
  return null;
}

function detectProject(question, projects) {
  const q = norm(question);

  // direct match by full name
  for (const p of projects || []) {
    if (q.includes(norm(p.name))) return p.name;
  }

  // small alias set
  const alias = [
    { k: "rescue", n: "RescueRouter" },
    { k: "secure", n: "Secure File Locker" },
    { k: "sarcasm", n: "Sarcasm Detection App" },
    { k: "duckhunt", n: "DuckHunt AR" },
    { k: "healthcare chatbot", n: "Healthcare Chatbot" },
  ];
  for (const a of alias) if (q.includes(a.k)) return a.n;

  return null;
}

// ---------- formatting (medium detail) ----------
function fmtBullets(arr, max = 3) {
  return (arr || []).slice(0, max).map((x) => `• ${x}`).join("\n");
}

function fmtTech(tech) {
  return tech?.length ? `Tech: ${tech.join(", ")}` : "";
}

function formatWhoIs({ focus, companies, languages }) {
  const focusLine = focus.length ? focus.join(", ") : "software engineering";
  const companyLine = companies.length ? `He has experience at ${companies.join(" and ")}.` : "";
  const langLine = languages.length ? `Key languages: ${languages.join(", ")}.` : "";

  return [
    `### Siddesh Kamble`,
    `Siddesh is a software developer focused on ${focusLine}.`,
    companyLine,
    langLine,
  ]
    .filter(Boolean)
    .join("\n");
}

function formatExpertise(skills) {
  const parts = [];
  if (skills.languages.length) parts.push(`• Languages: ${skills.languages.join(", ")}`);
  if (skills.web.length) parts.push(`• Web / Backend: ${skills.web.join(", ")}`);
  if (skills.data.length) parts.push(`• Data: ${skills.data.join(", ")}`);
  if (skills.cloud.length) parts.push(`• Cloud / Tools: ${skills.cloud.join(", ")}`);

  return [
    `### Core Expertise`,
    parts.length ? parts.join("\n") : "• (Skills not found in resume text)",
  ].join("\n\n");
}

function formatExperienceSummary(exp) {
  const top = (exp || []).slice(0, 4).map((e) => {
    return [
      `**${e.company} — ${e.title} (${e.dates})**`,
      fmtBullets(e.highlights, 2),
      fmtTech(e.tech),
    ]
      .filter(Boolean)
      .join("\n");
  });

  return [
    `### Professional Experience`,
    `Siddesh has experience across software engineering and conversational AI roles.`,
    "",
    top.join("\n\n"),
    "",
    `Ask about a specific company (example: “What did he do at Quantiphi?”) to go deeper.`,
  ]
    .filter(Boolean)
    .join("\n");
}

function formatCompanyExperience(role) {
  return [
    `### ${role.company}`,
    `**${role.title} (${role.dates})**`,
    fmtBullets(role.highlights, 4),
    fmtTech(role.tech),
  ]
    .filter(Boolean)
    .join("\n\n");
}

function formatProjectsList(projects) {
  const list = (projects || []).slice(0, 10).map((p) => `• **${p.name}** — ${p.description}`).join("\n");
  return [
    `### Projects`,
    list || "• (No projects found in portfolio.json)",
    "",
    `Ask: “Tell me more about <project name>” to get details.`,
  ]
    .filter(Boolean)
    .join("\n");
}

function formatProjectDetail(p) {
  return [
    `### ${p.name}`,
    p.description || "",
    fmtTech(p.tech),
    "",
    `Want another project? Ask: “List projects”.`,
  ]
    .filter(Boolean)
    .join("\n\n");
}

// ---------- handler ----------
export default function handler(req, res) {
  try {
    if (req.method === "GET") {
      return res.status(200).json({ ok: true, message: "API is live. Use POST { question }." });
    }
    if (req.method !== "POST") {
      return res.status(405).json({ error: "POST only" });
    }

    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const questionRaw = (body?.question || "").trim();
    if (!questionRaw) return res.status(400).json({ error: "Missing question" });

    const intent = normalizeQuestion(questionRaw);

    const records = loadKBRecords();
    const portfolio = loadPortfolio();
    const exp = portfolio.experience || [];
    const projects = portfolio.projects || [];

    // ---- who is / about ----
    if (intent.includes("who is siddesh") || intent.includes("tell me about siddesh") || intent === "who is siddesh") {
      const skills = extractSkillsFromResume(records);

      const focus = [];
      if (skills.web.length) focus.push("full-stack development");
      if (skills.cloud.length) focus.push("cloud & data systems");
      // only add AI if resume text has it
      if (records.some((r) => r.source === "resume.pdf" && /dialogflow|conversational/i.test(r.text))) {
        focus.push("conversational AI");
      }

      const companies = [];
      if (exp.some((e) => norm(e.company).includes("iconsult"))) companies.push("iConsult");
      if (exp.some((e) => norm(e.company).includes("quantiphi"))) companies.push("Quantiphi");

      return res.json({
        answer: formatWhoIs({
          focus,
          companies,
          languages: skills.languages,
        }),
      });
    }

    // ---- expertise ----
    if (intent === "expertise") {
      const skills = extractSkillsFromResume(records);
      return res.json({ answer: formatExpertise(skills) });
    }

    // ---- company-specific experience ----
    const company = detectCompany(questionRaw);
    if (company) {
      const match = exp.find((e) => norm(e.company).includes(norm(company).split(" ")[0]));
      if (match) {
        return res.json({ answer: formatCompanyExperience(match) });
      }
      return res.json({
        answer: `### ${company}\nI couldn’t find a role for ${company} in portfolio.json. Try asking with the exact company name shown on the site.`,
      });
    }

    // ---- experience summary ----
    if (intent === "summarize experience" || intent.includes("experience")) {
      if (!exp.length) {
        return res.json({
          answer: "### Professional Experience\nI couldn’t find structured experience in data/portfolio.json.",
        });
      }
      return res.json({ answer: formatExperienceSummary(exp) });
    }

    // ---- projects list ----
    if (intent === "list projects") {
      return res.json({ answer: formatProjectsList(projects) });
    }

    // ---- project detail ----
    const projectName = detectProject(questionRaw, projects);
    if (projectName) {
      const p = projects.find((x) => norm(x.name) === norm(projectName));
      if (p) return res.json({ answer: formatProjectDetail(p) });
    }

    // ---- refined fallback (no spam, still helpful) ----
    return res.json({
      answer:
        "### Try one of these\n" +
        "• Who is Siddesh?\n" +
        "• What are his expertise?\n" +
        "• Summarize his experience\n" +
        "• What did he do at Quantiphi?\n" +
        "• List projects / Tell me more about RescueRouter",
    });
  } catch (err) {
    return res.status(500).json({ error: String(err.message || err) });
  }
}
