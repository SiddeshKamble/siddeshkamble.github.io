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
  const linkClass = ({ isActive }) =>
    `whitespace-nowrap underline underline-offset-4 hover:opacity-70 ${
      isActive ? "font-semibold" : ""
    }`;

  return (
    <nav className="sticky top-0 z-20 bg-white/90 dark:bg-black/80 backdrop-blur py-4">
      <div className="max-w-3xl mx-auto px-4">
        {/* ✅ Desktop: inline (unchanged) */}
        <div className="hidden md:flex items-center gap-3 text-sm">
          {NAV.map((item, i) => (
            <React.Fragment key={item.to}>
              <NavLink to={item.to} className={linkClass}>
                {item.label.toLowerCase()}
              </NavLink>
              {i < NAV.length - 1 && <span className="opacity-40">•</span>}
            </React.Fragment>
          ))}
          <span className="opacity-40">•</span>
          <button
            type="button"
            onClick={onToggleTheme}
            className="underline underline-offset-4 hover:opacity-70"
          >
            {theme}
          </button>
        </div>

        {/* ✅ Mobile: single-row scroll */}
        <div className="md:hidden flex items-center gap-3">
          <div
            className="flex-1 overflow-x-auto"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="flex items-center gap-4 text-sm pr-2">
              {NAV.map((item) => (
                <NavLink key={item.to} to={item.to} className={linkClass}>
                  {item.label.toLowerCase()}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Theme as a compact pill */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="shrink-0 rounded-full border border-black/10 dark:border-white/10 px-3 py-1 text-sm hover:opacity-80"
          >
            {theme}
          </button>
        </div>
      </div>
    </nav>
  );
}
