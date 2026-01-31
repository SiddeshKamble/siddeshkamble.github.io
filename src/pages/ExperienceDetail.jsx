import React from "react";
import { useParams } from "react-router-dom";
import { EXPERIENCES } from "../data";
import { Section, Tag, BackLink } from "../components/MinimalUI";

export default function ExperienceDetail() {
  const { slug } = useParams();
  const exp = EXPERIENCES.find((e) => e.slug === slug);

  if (!exp) {
    return (
      <Section title="Experience">
        <BackLink to="/experience" />
        <p className="opacity-80">Experience entry not found.</p>
      </Section>
    );
  }

  return (
    <Section title="Experience">
      <BackLink to="/experience" />

      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <div>
          <div className="text-lg font-semibold">{exp.role}</div>
          <div className="opacity-80">
            {exp.orgUrl ? (
              <a
                className="underline underline-offset-4 hover:opacity-70"
                href={exp.orgUrl}
                target="_blank"
                rel="noreferrer"
              >
                {exp.org}
                <span className="ml-1 text-[11px] opacity-70" aria-hidden>
                  ↗
                </span>
              </a>
            ) : (
              exp.org
            )}
          </div>
        </div>
        <div className="text-sm opacity-70">{exp.time}</div>
      </div>

      {exp.summary ? <p className="mt-3 leading-relaxed opacity-90">{exp.summary}</p> : null}

      {Array.isArray(exp.tags) && exp.tags.length ? (
        <div className="mt-4">
          {exp.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      ) : null}

      {Array.isArray(exp.bullets) && exp.bullets.length ? (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">what i did</h3>
          <ul className="list-disc pl-5 space-y-1 opacity-90">
            {exp.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </Section>
  );
}
