import React from "react";
import { Section } from "../components/MinimalUI";
import { EMAIL, GITHUB, LINKEDIN } from "../data";

export default function Contact() {
  return (
    <Section title="Contact">
      <p className="leading-relaxed opacity-90">
        Best way to reach me is email:{" "}
        <a className="underline underline-offset-4 hover:opacity-70" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
        .
      </p>
      <p className="mt-2 leading-relaxed opacity-90">
        Or find me on{" "}
        <a className="underline underline-offset-4 hover:opacity-70" href={GITHUB} target="_blank" rel="noreferrer">
          GitHub
        </a>{" "}
        and{" "}
        <a className="underline underline-offset-4 hover:opacity-70" href={LINKEDIN} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        .
      </p>
    </Section>
  );
}
