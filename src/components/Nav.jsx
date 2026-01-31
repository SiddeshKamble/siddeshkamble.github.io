import React from "react";
import { NavLink } from "react-router-dom";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Publications", to: "/publications" },
  { label: "Certifications", to: "/certifications" },
  { label: "Contact", to: "/contact" },
];

export default function Nav({ theme = "light", onToggleTheme }) {
  return (
    <nav aria-label="Primary" className="w-full py-6">
      <div className="mx-auto max-w-3xl px-4 text-sm">
        {NAV.map((item, i) => (
          <span key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `underline underline-offset-4 hover:opacity-70 ${isActive ? "font-semibold" : ""}`
              }
            >
              {item.label.toLowerCase()}
            </NavLink>
            {i < NAV.length - 1 ? <span className="px-2">•</span> : null}
          </span>
        ))}
        <span className="px-2">•</span>
        <span>
          <button
            type="button"
            onClick={onToggleTheme}
            className="underline underline-offset-4 hover:opacity-70"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? "light" : "dark"}
          </button>
        </span>
      </div>
    </nav>
  );
}
