import React, { useMemo, useState } from "react";
import { PROJECTS } from "../data";
import { Section, ProjectGrid, ProjectList } from "../components/MinimalUI";

export default function Projects() {
  const [view, setView] = useState("grid");
  const projects = useMemo(() => PROJECTS, []);

  return (
    <Section title="Projects">
      <div className="flex items-center gap-2 mb-4">
        <button
          className={`border border-black/20 px-3 py-1 text-sm rounded ${
            view === "grid" ? "bg-black text-white" : "hover:bg-black/5"
          }`}
          onClick={() => setView("grid")}
          type="button"
        >
          Grid
        </button>
        <button
          className={`border border-black/20 px-3 py-1 text-sm rounded ${
            view === "list" ? "bg-black text-white" : "hover:bg-black/5"
          }`}
          onClick={() => setView("list")}
          type="button"
        >
          List
        </button>
      </div>

      {view === "grid" ? <ProjectGrid projects={projects} /> : <ProjectList projects={projects} />}
    </Section>
  );
}
