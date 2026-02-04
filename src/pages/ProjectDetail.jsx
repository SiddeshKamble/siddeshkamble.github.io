import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { PROJECTS } from "../data";
import { Section, Tag, BackLink } from "../components/MinimalUI";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Section>
        <p>Project not found.</p>
        <Link to="/projects">← back to projects</Link>
      </Section>
    );
  }

  return (
    <Section>
      <BackLink to="/projects">← back to projects</BackLink>

      <h1>{project.title}</h1>
      <p className="mt-2">{project.description}</p>

      {/* Tags */}
      <div className="mt-3">
        {project.tags?.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      {/* Repo / Live links */}
      <div className="mt-4 text-base font-semibold">
        {project.repoUrl && (
          <a
            className="underline underline-offset-4 hover:opacity-70"
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        )}
        {project.repoUrl ? " • " : null}
        {project.liveUrl ? (
          project.liveUrl.startsWith("/") ? (
            <Link className="underline underline-offset-4 hover:opacity-70" to={project.liveUrl}>
              live
            </Link>
          ) : (
            <a className="underline underline-offset-4 hover:opacity-70" href={project.liveUrl} target="_blank" rel="noreferrer">
              live
            </a>
          )
        ) : (
          <span className="opacity-60">live (soon)</span>
        )}
      </div>

      {/* Highlights */}
      {project.highlights && (
        <div className="mt-6">
          <h3 className="font-semibold">highlights</h3>
          <ul className="list-disc ml-5 mt-2 space-y-1 opacity-90">
            {project.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* DETAILS */}
      {project.details && (
  <div className="project-details mt-8 text-sm leading-relaxed">
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        img: ({ node, ...props }) => (
          <img
            {...props}
            className="project-details-img"
            loading="lazy"
            alt={props.alt || "project media"}
          />
        ),
        a: ({ node, children, href, ...props }) => (
          <a
            href={href}
            {...props}
            className="underline underline-offset-4 hover:opacity-70"
            aria-label={
              typeof children === "string"
                ? children
                : href
                ? `Open link: ${href}`
                : "External link"
            }
          >
            {children && children.length > 0 ? (
              children
            ) : (
              <span className="sr-only">External link</span>
            )}
          </a>
        ),
      }}
    >
      {project.details}
    </ReactMarkdown>
  </div>
)}

    </Section>
  );
}