import React from "react";
import { paneStyle } from "../shared-styles";
import { experienceConfig } from "../configs/experience.config";

const Experience = ({ paneExp, expWrapper }: { paneExp: React.RefObject<HTMLElement | null>; expWrapper: React.RefObject<HTMLElement | null> }) => {
  return (
    <section
      ref={paneExp}
      style={{
        ...paneStyle(false),
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        minHeight: 460,
        transform: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "5rem",
        paddingBottom: "3rem",
        boxSizing: "border-box",
      }}
    >
      {/* HEADER */}
      <div
        className="exp-header font-mono"
        style={{
          width: "80%",
          padding: "0 2rem",
          boxSizing: "border-box",

          fontSize: 11,
          color: "#818cf8",
          letterSpacing: "0.18em",
          textTransform: "uppercase",

          marginBottom: "3rem",
          flexShrink: 0,
          position: "relative",
          top: "-2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span>{experienceConfig.title}</span>

          <span
            style={{
              color: "#404040",
              letterSpacing: "0.12em",
            }}
          >
            Scroll to traverse timeline →
          </span>
        </div>
      </div>

      <div
        ref={expWrapper as React.RefObject<HTMLDivElement>}
        style={{
          display: "flex",
          alignItems: "stretch",

          width: "max-content",
          height: 500,

          // Keep the first and last timeline nodes centered
          paddingLeft: "calc(50vw - 32px)",
          paddingRight: "calc(50vw - 32px)",

          position: "relative",
          boxSizing: "border-box",
          flexShrink: 0,
        }}
      >
        {/* AXIS */}
        <div
          style={{
            position: "absolute",

            top: "50%",
            left: 0,

            width: "100%",
            height: 1,

            background: "rgba(255,255,255,0.08)",

            transform: "translateY(-50%)",
          }}
        />

        {experienceConfig.experiences.map((exp, i) => (
          <ExpNode key={i} {...exp} />
        ))}
      </div>
    </section>
  );
};

const ExpNode = ({
  date,
  role,
  desc,
  tags,
  accent,
  pos,
}: {
  date: string;
  role: string;
  desc: string;
  tags: string;
  accent: string;
  pos: "top" | "bottom";
}) => {
  const stemH = 64;

  return (
    <div
    className="exp-node"
      style={{
        position: "relative",

        width: 360,
        flexShrink: 0,

        height: "100%",
      }}
    >
      {/* DOT */}
      <div
        style={{
          position: "absolute",

          left: 32,
          top: "50%",

          transform: "translate(-50%, -50%)",

          width: 12,
          height: 12,

          borderRadius: "50%",

          background: accent,

          boxShadow: accent === "#6366f1" ? "0 0 14px #6366f1" : "none",

          zIndex: 2,
        }}
      />

      {/* STEM */}
      <div
        style={{
          position: "absolute",

          left: 32,

          ...(pos === "top"
            ? {
                bottom: "50%",
              }
            : {
                top: "50%",
              }),

          width: 1,
          height: stemH,

          background:
            pos === "top"
              ? `linear-gradient(to top, ${accent}, transparent)`
              : `linear-gradient(to bottom, ${accent}, transparent)`,
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "absolute",

          left: 0,
          width: "100%",

          paddingRight: 40,

          boxSizing: "border-box",

          ...(pos === "top"
            ? {
                bottom: `calc(50% + ${stemH}px)`,
                paddingBottom: 12,
              }
            : {
                top: `calc(50% + ${stemH}px)`,
                paddingTop: 12,
              }),
        }}
      >
        <Content
          date={date}
          role={role}
          desc={desc}
          tags={tags}
          accent={accent}
        />
      </div>
    </div>
  );
};

const Content = ({
  date,
  role,
  desc,
  tags,
  accent,
}: {
  date: string;
  role: string;
  desc: string;
  tags: string;
  accent: string;
}) => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        className="font-mono"
        style={{
          fontSize: 11,
          color: accent === "#6366f1" ? "#818cf8" : "#525252",

          marginBottom: 8,

          letterSpacing: "0.08em",

          lineHeight: 1.4,
        }}
      >
        {date}
      </div>

      <h3
        style={{
          fontSize: "1.35rem",
          lineHeight: 1.2,

          fontWeight: 700,

          color: "#fff",

          margin: "0 0 10px",
        }}
      >
        {role}
      </h3>

      <p
        style={{
          color: "#737373",

          fontSize: "0.85rem",
          lineHeight: 1.65,

          fontWeight: 300,

          margin: "0 0 12px",

          maxWidth: 320,
        }}
      >
        {desc}
      </p>

      <div
        className="font-mono"
        style={{
          fontSize: 10,

          color: "#404040",

          letterSpacing: "0.1em",

          lineHeight: 1.5,
        }}
      >
        {tags}
      </div>
    </div>
  );
};

export default Experience;
