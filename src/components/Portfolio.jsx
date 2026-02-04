import React, { useMemo, useState } from "react";
import { ExternalLink, Mail, Github, Linkedin } from "lucide-react";
import ChatBot from "./ChatBot.jsx";

// Lucas-style: minimal, readable, fast.

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const ABOUT_PARAGRAPHS = [
  "I’m Siddesh Kamble, a software engineer and CS grad student based in New York, currently completing my MS in Computer Science at Syracuse University (Dec ’25).",
  "My journey has been one of relentless curiosity and growth—turning every challenge into an opportunity to learn and make an impact.",
  "I’m proficient in Python, Java, Django, React, and cloud technologies, with experience in Google Cloud, Power BI, and deep learning frameworks like PyTorch and TensorFlow.",
  "When I'm not coding, you can find me hiking, reading about emerging tech trends, or upskilling.",
];

export const SKILLS = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "TypeScript",
  "HTML",
  "CSS",
  "GraphQL",
  "MongoDB",
  "MySQL",
  "AWS",
];

export const EXPERIENCES = [
  {
    role: "Software Developer",
    org: "iConsult Collaborative",
    time: "Jan ’25 – Dec ’25",
    summary:
      "Led full-stack development of a scalable applicant management platform used by internal caseworkers, improving intake, eligibility, and reporting workflows.",
    tags: ["React", "Next.js", "MySQL", "Prisma ORM", "Tailwind CSS"],
  },
  {
    role: "Conversational AI Engineer",
    org: "Quantiphi Inc.",
    time: "Jun ’21 – Oct ’23",
    summary:
      "Built and maintained production-grade conversational AI systems serving thousands of users across web, mobile, and telephony.",
    tags: [
      "Google Dialogflow",
      "Node.js",
      "Conversational AI",
      "Google Cloud Platform",
      "Cloud Functions",
    ],
  },
  {
    role: "Data Science Intern",
    org: "Markytics.AI",
    time: "Jan ’21 – Jun ’21",
    summary:
      "Developed backend services and analytics pipelines for financial risk scoring and forecasting. Exposed ML models through stable REST APIs.",
    tags: ["Django", "Power BI", "Google Data Studio", "Machine Learning", "Python"],
  },
];

export const PROJECTS = [
  {
    title: "Sarcasm Detection using Deep Learning",
    description:
      "Developed and deployed a sarcasm classifier using deep learning, paired with a clean interactive UI for real-time testing.",
    tags: ["Python", "Deep Learning", "NLP", "Streamlit"],
    image: "/projects/sarcasm.avif",
    codeLink: "https://github.com/SiddeshKamble/Sarcasm-Detection",
  },
  {
    title: "Emergency Alert System",
    description:
      "Built an emergency alert and routing platform with user-friendly interfaces for citizens and responders.",
    tags: ["React", "Node", "APIs", "UI/UX"],
    image: "/projects/alert.jpg",
    codeLink: "https://github.com/SiddeshKamble/RescueRoute",
  },
  {
    title: "Secure File Sharing",
    description:
      "Implemented a secure file sharing workflow focusing on access control, encryption-minded design, and reliable delivery.",
    tags: ["Security", "Backend", "Auth"],
    image: "/projects/secure.jpg",
    codeLink: "https://github.com/SiddeshKamble",
  },
  {
    title: "RescueRoute",
    description:
      "Emergency routing UI that helps citizens submit requests and lets responders track and update statuses.",
    tags: ["Full Stack", "UX", "Realtime"],
    image: "/projects/emergency.avif",
    codeLink: "https://github.com/SiddeshKamble/RescueRoute",
  },
  {
    title: "Chatbots & Conversational AI",
    description:
      "Shipped production virtual agents across web/mobile/telephony using Dialogflow and cloud serverless tooling.",
    tags: ["Dialogflow", "GCP", "Node.js"],
    image: "/projects/chatbots.png",
    codeLink: "https://github.com/SiddeshKamble",
  },
  {
    title: "Duck Detection",
    description:
      "Computer vision experiment using transfer learning and practical deployment patterns.",
    tags: ["Computer Vision", "Transfer Learning"],
    image: "/projects/duck.jpg",
    codeLink: "https://github.com/SiddeshKamble",
  },
];

export const PUBLICATIONS = [
  {
    title: "Engagement and Emotion Analysis in Theatre using Thermal Imaging",
    venue: "IEEE Conference Publication",
    year: "2021",
    description:
      "Automation for movie engagement/emotion measurement using thermal imaging + object detection (YOLOv5) to infer audience reactions.",
    link: "https://ieeexplore.ieee.org/document/9487749",
  },
  {
    title: "A Survey on Engagement and Emotion Analysis in Theatre using Thermal Imaging",
    venue: "IEEE Conference Publication",
    year: "2020",
    description:
      "Survey of thermal facial emotion recognition focused on low-light audience emotion analysis and reducing bias in review systems.",
    link: "https://ieeexplore.ieee.org/document/9297656",
  },
  {
    title: "Alert Generation on Detection of Suspicious Activity Using Transfer Learning",
    venue: "IEEE Conference Publication",
    year: "2020",
    description:
      "Real-time CCTV + CNN transfer learning to detect suspicious activities (shoplifting/robbery/break-ins) with instant alerts.",
    link: "https://ieeexplore.ieee.org/document/9225263",
  },
];

export const CERTIFICATIONS = [
  {
    name: "AWS Certified Developer - Associate",
    org: "Amazon Web Services",
    focus: "Developing, deploying, and maintaining cloud applications using AWS services",
    link: "https://www.credly.com/badges/38976e46-4f67-4bff-8997-3ae07fc40dd6",
  },
  {
    name: "Google CCAI Certification",
    org: "Google Cloud Badge",
    focus: "Conversational AI, dialog systems, and intelligent virtual agents on Google Cloud",
    link: "https://www.skills.google/public_profiles/036b2f73-3cda-492d-a459-449662bb2616",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    org: "Oracle",
    focus: "Generative AI, large language models, and AI services on Oracle Cloud Infrastructure",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B6DF357F771CCD0491136691674343433C62C329D3F42AF6C25598425A9457AD",
  },
  {
    name: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    org: "Microsoft",
    focus: "Generative AI fundamentals, prompt engineering, and responsible AI practices",
    link: "https://www.linkedin.com/learning/certificates/a22f612a46925d6b997465d2b0654a148e2f5bcd3e3593527d21b943b9f7e1b1",
  },
];

function DotNav() {
  return (
    <nav aria-label="Primary" className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-black/10">
      <div className="max-w-3xl mx-auto px-5 py-4">
        {/* Desktop: dot nav */}
        <div className="hidden md:block text-sm">
          {NAV.map((item, i) => (
            <span key={item.href}>
              <a className="underline underline-offset-4 hover:opacity-70" href={item.href}>
                {item.label.toLowerCase()}
              </a>
              {i < NAV.length - 1 ? <span className="px-2 opacity-40">•</span> : null}
            </span>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden overflow-x-auto" style={{ WebkitOverflowScrolling: "touch" }}>
          <div className="flex items-center gap-4 text-sm pr-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                className="whitespace-nowrap underline underline-offset-4 hover:opacity-70"
                href={item.href}
              >
                {item.label.toLowerCase()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-10">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}

function Tag({ children }) {
  return (
    <span className="inline-block border border-[color:var(--border)] px-2 py-0.5 rounded text-xs mr-2 mb-2">
      {children}
    </span>
  );
}

function ProjectGrid({ projects }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map((p) => (
        <a
          key={p.title}
          href={p.codeLink}
          target="_blank"
          rel="noreferrer"
          className="block border border-[color:var(--border)] rounded-md overflow-hidden hover:border-black/40 transition-colors"
        >
          <div className="aspect-[16/9] bg-black/5">
            <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold">{p.title}</h3>
              <ExternalLink size={16} className="opacity-70" />
            </div>
            <p className="text-sm mt-2 opacity-80">{p.description}</p>
            <div className="mt-3">
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

function ProjectList({ projects }) {
  return (
    <div className="space-y-5">
      {projects.map((p) => (
        <div key={p.title} className="border-b border-black/10 pb-5">
          <div className="flex items-start justify-between gap-3">
            <a
              href={p.codeLink}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:opacity-70 font-semibold"
            >
              {p.title}
            </a>
            <ExternalLink size={16} className="opacity-70" />
          </div>
          <p className="text-sm mt-2 opacity-80">{p.description}</p>
          <div className="mt-3">
            {p.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [projectView, setProjectView] = useState("grid");

  const email = "siddeshkamble45@gmail.com";
  const github = "https://github.com/SiddeshKamble";
  const linkedin = "https://www.linkedin.com/in/siddesh-kamble";

  const projects = useMemo(() => PROJECTS, []);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <DotNav />

      <main className="flex-1 w-full max-w-3xl mx-auto px-5 pb-16">
        <section id="home" className="py-10">
          <h1 className="text-3xl font-semibold">hi, i&apos;m siddesh.</h1>
          <p className="mt-4 leading-relaxed opacity-90">
            Software engineer and CS grad student (Syracuse University). I build full-stack products and
            applied AI/ML systems—especially conversational AI.
          </p>
          <p className="mt-3 leading-relaxed opacity-90">
            <a className="underline underline-offset-4 hover:opacity-70" href={`mailto:${email}`}>
              {email}
            </a>
            <span className="px-2">•</span>
            <a className="underline underline-offset-4 hover:opacity-70" href={github} target="_blank" rel="noreferrer">
              github
            </a>
            <span className="px-2">•</span>
            <a className="underline underline-offset-4 hover:opacity-70" href={linkedin} target="_blank" rel="noreferrer">
              linkedin
            </a>
            <span className="px-2">•</span>
            <a className="underline underline-offset-4 hover:opacity-70" href="/resume.pdf" download="SiddeshKamble_Resume.pdf">
              resume
            </a>
          </p>
        </section>

        <Section id="about" title="About">
          <div className="space-y-3 leading-relaxed opacity-90">
            {ABOUT_PARAGRAPHS.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <div className="mt-4">
            {SKILLS.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="space-y-6">
            {EXPERIENCES.map((e) => (
              <div key={`${e.role}-${e.org}`} className="border-b border-black/10 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <div className="font-semibold">{e.role}</div>
                    <div className="opacity-80">{e.org}</div>
                  </div>
                  <div className="text-sm opacity-70">{e.time}</div>
                </div>
                <p className="mt-2 text-sm leading-relaxed opacity-85">{e.summary}</p>
                <div className="mt-3">
                  {e.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="flex items-center gap-2 mb-4">
            <button
              className={`border border-black/20 px-3 py-1 text-sm rounded ${
                projectView === "grid" ? "bg-black text-white" : "hover:bg-black/5"
              }`}
              onClick={() => setProjectView("grid")}
              type="button"
            >
              Grid
            </button>
            <button
              className={`border border-black/20 px-3 py-1 text-sm rounded ${
                projectView === "list" ? "bg-black text-white" : "hover:bg-black/5"
              }`}
              onClick={() => setProjectView("list")}
              type="button"
            >
              List
            </button>
          </div>

          {projectView === "grid" ? <ProjectGrid projects={projects} /> : <ProjectList projects={projects} />}
        </Section>

        <Section id="publications" title="Publications">
          <div className="space-y-5">
            {PUBLICATIONS.map((p) => (
              <div key={p.link} className="border-b border-black/10 pb-5">
                <div className="flex items-start justify-between gap-3">
                  <a href={p.link} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:opacity-70 font-semibold">
                    {p.title}
                  </a>
                  <span className="text-sm opacity-70">{p.year}</span>
                </div>
                <div className="text-sm mt-1 opacity-80">{p.venue}</div>
                <p className="text-sm mt-2 opacity-85 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <div className="space-y-5">
            {CERTIFICATIONS.map((c) => (
              <div key={c.link} className="border-b border-black/10 pb-5">
                <a href={c.link} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:opacity-70 font-semibold">
                  {c.name}
                </a>
                <div className="text-sm mt-1 opacity-80">{c.org}</div>
                <p className="text-sm mt-2 opacity-85 leading-relaxed">{c.focus}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="leading-relaxed opacity-90">
            Best way to reach me is email:{" "}
            <a className="underline underline-offset-4 hover:opacity-70" href={`mailto:${email}`}>
              {email}
            </a>
            .
          </p>
          <p className="mt-2 leading-relaxed opacity-90">
            Or find me on{" "}
            <a className="underline underline-offset-4 hover:opacity-70" href={github} target="_blank" rel="noreferrer">
              GitHub
            </a>{" "}
            and{" "}
            <a className="underline underline-offset-4 hover:opacity-70" href={linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            .
          </p>
        </Section>
      </main>

      {/* ✅ Footer outside main so it stays at bottom */}
      <footer className="border-t border-black/10">
        <div className="max-w-3xl mx-auto px-5 py-6 flex items-center justify-between gap-4 text-sm">
          <div className="opacity-70">© {new Date().getFullYear()} Siddesh Kamble</div>

          <div className="flex items-center gap-3">
            <a href={`mailto:${email}`} aria-label="Email" className="rounded-full p-2 hover:bg-black/5 transition">
              <Mail size={18} />
            </a>
            <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full p-2 hover:bg-black/5 transition">
              <Github size={18} />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full p-2 hover:bg-black/5 transition">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* Keep chatbot, but rest of site stays minimal */}
      <ChatBot />
    </div>
  );
}
