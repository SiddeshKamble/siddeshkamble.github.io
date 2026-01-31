import React from "react";
import { PUBLICATIONS } from "../data";
import { Section } from "../components/MinimalUI";

export default function Publications() {
  return (
    <Section title="Publications">
      <div className="space-y-5">
        {PUBLICATIONS.map((p) => (
          <div key={p.link} className="border-b border-black/10 pb-5">
            <div className="flex items-start justify-between gap-3">
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-70 font-semibold"
              >
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
  );
}
