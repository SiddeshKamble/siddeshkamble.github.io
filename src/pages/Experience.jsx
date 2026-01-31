import React from "react";
import { Link } from "react-router-dom";
import { EXPERIENCES } from "../data";
import { Section, Tag } from "../components/MinimalUI";

export default function Experience() {
  return (
    <Section title="Experience">
      <div className="space-y-6">
        {EXPERIENCES.map((e) => (
          <div key={e.slug} className="border-b border-black/10 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <div className="font-semibold">
                  <Link
                    to={`/experience/${e.slug}`}
                    className="underline underline-offset-4 hover:opacity-70"
                  >
                    {e.role}
                  </Link>
                </div>
                <div className="opacity-80">
                  {e.orgUrl ? (
                    <a
                      className="underline underline-offset-4 hover:opacity-70"
                      href={e.orgUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {e.org}
                      <span className="ml-1 text-[11px] opacity-70" aria-hidden>
                        ↗
                      </span>
                    </a>
                  ) : (
                    e.org
                  )}
                </div>
              </div>
              <div className="text-sm opacity-70">{e.time}</div>
            </div>
            <p className="mt-2 text-sm leading-relaxed opacity-85">{e.summary}</p>
            <div className="mt-2">
              <Link
                to={`/experience/${e.slug}`}
                className="text-sm underline underline-offset-4 hover:opacity-70"
              >
                view details <span aria-hidden>↗</span>
              </Link>
            </div>
            <div className="mt-3">
              {e.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
