import React, { useRef } from 'react'
import { paneStyle } from '../shared-styles';
import { projectConfig } from '../configs/project.config';
import { handleNavigate } from '../utils/common-functions';

const Projects = ({ paneProjects, projWrapper }: {paneProjects: React.RefObject<HTMLElement | null>; projWrapper: React.RefObject<HTMLElement | null>}) => {

  return (
    <section ref={paneProjects} style={{ ...paneStyle(false) }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="proj-header font-mono"
          style={{
            fontSize: 11,
            color: "#818cf8",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: "2rem",
            padding: "0 6rem",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{projectConfig.title}</span>
            <span style={{ color: "#64748b" }}>Scroll to pan horizontally →</span>
          </div>
        </div>

        <div
          ref={projWrapper as React.RefObject<HTMLDivElement>}
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: "3rem",
            width: "max-content",
            paddingLeft: "6rem",
            paddingRight: "8rem",
            willChange: "transform",
          }}
        >
          {projectConfig.projects.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ index, title, desc, tags, hoverColor, highlights, metric, link, code }: {
    index: string;
    title: string;
    desc: string;
    tags: string;
    hoverColor: string;
    highlights?: string[];
    metric?: { value: string; label: string };
    link?: string;
    code?: string;
}) => {
  const arrowRef = useRef<HTMLSpanElement>(null);
  return (
    <div
      className="proj-card"
      style={{
        width: "clamp(340px, 34vw, 460px)",
        height: "min(72vh, 640px)",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        borderTop: "1px solid rgba(148,163,184,0.15)",
        paddingTop: "1.5rem",
        cursor: "pointer",
      }}
      onMouseEnter={() => { if (arrowRef.current) arrowRef.current.style.color = hoverColor; }}
      onMouseLeave={() => { if (arrowRef.current) arrowRef.current.style.color = "#64748b"; }}
    >
      <div
        style={{
          position: "relative",
          flex: "0 0 auto",
          height: "38%",
          minHeight: 160,
          borderRadius: 12,
          marginBottom: "1.75rem",
          background: `linear-gradient(155deg, ${hoverColor}1f 0%, rgba(255,255,255,0.02) 100%)`,
          border: `1px solid ${hoverColor}33`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "1.25rem 1.5rem",
          overflow: "hidden",
        }}
      >
        <span
          className="font-mono"
          style={{ fontSize: "3rem", fontWeight: 700, color: `${hoverColor}40`, lineHeight: 1 }}
        >
          {index}
        </span>
        {metric && (
          <div>
            <div style={{ fontSize: "1.6rem", fontWeight: 700, color: "#fff" }}>{metric.value}</div>
            <div className="font-mono" style={{ fontSize: 10, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {metric.label}
            </div>
          </div>
        )}
      </div>

      <h3 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {title}
        {link && <span ref={arrowRef} style={{ color: "#64748b", transform: "rotate(45deg)", display: "inline-block", transition: "color 0.25s", fontSize: "1.5rem" }}
        onClick={handleNavigate(link)}
        >↑</span>}
      </h3>

      <p style={{ color: "#cbd5e1", fontSize: "0.875rem", lineHeight: 1.7, fontWeight: 300, marginBottom: "1.25rem" }}>{desc}</p>

      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.6rem", flex: 1 }}>
        {highlights?.map((h, i) => (
          <li key={i} style={{ display: "flex", gap: "0.6rem", fontSize: "0.82rem", color: "#94a3b8", lineHeight: 1.5 }}>
            <span style={{ color: hoverColor, flexShrink: 0 }}>▸</span>
            {h}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(148,163,184,0.15)" }}>
        <div className="font-mono" style={{ fontSize: 10, color: "#64748b", letterSpacing: "0.1em", marginBottom: "0.6rem" }}>{tags}</div>
        {code && <span className="font-mono" style={{ fontSize: 11, color: hoverColor, letterSpacing: "0.06em", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
        onClick={handleNavigate(code)}>
          View code →
        </span>}
      </div>
    </div>
  );
}

export default Projects