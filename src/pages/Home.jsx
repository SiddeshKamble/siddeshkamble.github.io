import React from "react";
// import { Link } from "react-router-dom";
import { ABOUT_PARAGRAPHS, SKILLS, EMAIL, GITHUB, LINKEDIN, RESUME_PATH, PROJECTS } from "../data";
import { Tag } from "../components/MinimalUI";

export default function Home() {
  // Pin the homepage “Selected work” to your top 3.
  const TOP3 = ["rescueroute", "sarcasm-detection", "secure-file-locker"];
  const selectedWork = TOP3
    .map((slug) => PROJECTS.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <section className="py-10">
      <h1 className="text-3xl font-semibold">hi, i&apos;m siddesh.</h1>
      <p className="mt-4 leading-relaxed opacity-90">
        Software engineer and CS graduate student at Syracuse University, graduated in December 2025. I build reliable, scalable software systems and full-stack products with experience across backend, cloud, and databases.
      </p>

      <p className="mt-3 leading-relaxed opacity-90">
  <a className="underline underline-offset-4 hover:opacity-70" href={`mailto:${EMAIL}`}>
    {EMAIL}
  </a>{" "}
  •{" "}
  <a className="underline underline-offset-4 hover:opacity-70" href={GITHUB} target="_blank" rel="noreferrer">
    github
  </a>{" "}
  •{" "}
  <a className="underline underline-offset-4 hover:opacity-70" href={LINKEDIN} target="_blank" rel="noreferrer">
    linkedin
  </a>{" "}
  •{" "}
  <a className="underline underline-offset-4 hover:opacity-70" href={RESUME_PATH} download="SiddeshKamble_Resume.pdf">
    resume
  </a>
</p>


      <div className="py-10">
        <h2 className="text-xl font-semibold mb-4">about</h2>
<div className="space-y-3 leading-relaxed opacity-90">
  {ABOUT_PARAGRAPHS.map((t) => (
    <p key={t}>{t}</p>
  ))}
</div>

<img
  src="/about-placeholder.png"
  alt="Workspace placeholder"
  className="mt-6 w-full max-w-2xl mx-auto rounded-md border border-[color:var(--border)]"
  loading="lazy"
/>

<div className="mt-4">
  {SKILLS.map((s) => (
    <Tag key={s}>{s}</Tag>
  ))}

<div className="mt-10">
  <h2 className="text-xl font-semibold mb-4">selected work</h2>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {selectedWork.map((p) => (
      <a
        key={p.slug}
        href={`/projects/${p.slug}`}
        className="block border border-black/10 dark:border-white/15 rounded-lg overflow-hidden hover:opacity-90"
      >
        <div className="aspect-[185/104] bg-black/5">
          <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="p-3 text-sm font-semibold">{p.title}</div>
      </a>
    ))}
  </div>
</div>
</div>
      </div>
    </section>
  );
}
