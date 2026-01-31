import React from "react";
import { Link } from "react-router-dom";
// no icon imports needed for minimal theme

export function Section({ title, children }) {
  return (
    <section className="py-10">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}

export function Tag({ children }) {
  return (
    <span className="inline-block border border-[color:var(--border)] px-2 py-0.5 rounded text-xs mr-2 mb-2">
      {children}
    </span>
  );
}

export function ProjectGrid({ projects }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map((p) => (
        <div
          key={p.slug || p.title}
          className="border border-[color:var(--border)] rounded-md overflow-hidden hover:border-black/40 transition-colors"
        >
          {/* Main click target */}
          <Link to={p.slug ? `/projects/${p.slug}` : "/projects"} className="block">
            {p.image ? (
              <div className="aspect-[185/104] bg-black/5">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ) : null}

            <div className="p-4 pb-2">
              <h3 className="font-semibold">{p.title}</h3>
              {p.description ? <p className="text-sm mt-2 opacity-80">{p.description}</p> : null}
              {Array.isArray(p.tags) && p.tags.length ? (
                <div className="mt-3">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              ) : null}
            </div>
          </Link>

          {/* Links row (bigger + easy to click) */}
          <div className="px-4 pb-4 text-sm font-semibold">
            {p.repoUrl ? (
              <a className="underline underline-offset-4 hover:opacity-70" href={p.repoUrl} target="_blank" rel="noreferrer">
                github
              </a>
            ) : null}
            {p.repoUrl ? " • " : null}
            {p.liveUrl ? (
              p.liveUrl.startsWith("/") ? (
                <Link className="underline underline-offset-4 hover:opacity-70" to={p.liveUrl}>
                  live
                </Link>
              ) : (
                <a className="underline underline-offset-4 hover:opacity-70" href={p.liveUrl} target="_blank" rel="noreferrer">
                  live
                </a>
              )
            ) : (
              <span className="opacity-60">live (soon)</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProjectList({ projects }) {
  return (
    <div className="space-y-6">
      {projects.map((p) => (
        <div key={p.slug || p.title} className="flex items-start justify-between gap-6">
          <div>
            <div className="font-semibold">
              <Link
                to={p.slug ? `/projects/${p.slug}` : "/projects"}
                className="underline underline-offset-4 hover:opacity-70"
              >
                {p.title}
              </Link>
            </div>
            {p.description ? <p className="text-sm mt-2 opacity-80 max-w-2xl">{p.description}</p> : null}

            <div className="mt-2 text-sm font-semibold">
              {p.repoUrl ? (
                <a className="underline underline-offset-4 hover:opacity-70" href={p.repoUrl} target="_blank" rel="noreferrer">
                  github
                </a>
              ) : null}
              {" "}
              {p.repoUrl ? "•" : null}{" "}
              {p.liveUrl ? (
                p.liveUrl.startsWith("/") ? (
                  <Link className="underline underline-offset-4 hover:opacity-70" to={p.liveUrl}>
                    live
                  </Link>
                ) : (
                  <a className="underline underline-offset-4 hover:opacity-70" href={p.liveUrl} target="_blank" rel="noreferrer">
                    live
                  </a>
                )
              ) : (
                <span className="opacity-60">live (soon)</span>
              )}
            </div>

            {Array.isArray(p.tags) && p.tags.length ? (
              <div className="mt-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            ) : null}
          </div>

          <Link
            to={p.slug ? `/projects/${p.slug}` : "/projects"}
            className="text-sm underline underline-offset-4 whitespace-nowrap hover:opacity-70"
          >
            details <span aria-hidden>↗</span>
          </Link>
        </div>
      ))}
    </div>
  );
}

export function BackLink({ to = "/", children = "← back" }) {
  return (
    <div className="mb-4">
      <Link to={to} className="text-sm underline underline-offset-4 hover:opacity-70">
        {children}
      </Link>
    </div>
  );
}
