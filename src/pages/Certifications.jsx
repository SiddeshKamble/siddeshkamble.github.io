import React from "react";
import { CERTIFICATIONS } from "../data";
import { Section } from "../components/MinimalUI";

const getCertIcon = (c) => {
  const org = (c.org || "").toLowerCase();
  if (org.includes("google") || org.includes("gcp")) return "/certs/gcp.svg";
  if (org.includes("aws") || org.includes("amazon")) return "/certs/aws.svg";
  if (org.includes("microsoft") || org.includes("azure")) return "/certs/azure.svg";
  return "/certs/cert.svg";
};

export default function Certifications() {
  return (
    <Section title="Certifications">
      <div className="space-y-5">
        {CERTIFICATIONS.map((c) => (
          <div key={c.link} className="border-b border-black/10 dark:border-white/15 pb-5">
            <div className="flex gap-4 items-start">
              <img src={c.image || getCertIcon(c)} alt="" className="w-12 h-12 mt-1 flex-none" />
              <div>
            <a
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:opacity-70 font-semibold"
            >
              {c.name}
            </a>
            <div className="text-sm mt-1 opacity-80">{c.org}</div>
            <p className="text-sm mt-2 opacity-85 leading-relaxed">{c.focus}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
