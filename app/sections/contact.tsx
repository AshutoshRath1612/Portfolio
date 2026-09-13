import React from 'react'
import { bodyText, paneStyle } from '../shared-styles';
import { contactConfig } from '../configs/contact.config';
import { sendEmail } from '../utils/common-functions';

const Contact = ({ paneContact }: { paneContact: React.RefObject<HTMLElement | null> }) => {
  return (
    <section ref={paneContact} style={{ ...paneStyle(false), textAlign: "center" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 3rem", marginTop: '3rem' }}>
        {/* <div
          className="contact-badge font-mono"
          style={{ fontSize: 11, color: "#818cf8", letterSpacing: "0.18em", textTransform: "uppercase", margin: "1.5rem", marginTop: "4rem" }}
        >
          {contactConfig.title}
        </div> */}

        <div
          className="contact-badge font-mono"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 12,
            color: "#34d399",
            background: "rgba(52,211,153,0.08)",
            border: "1px solid rgba(52,211,153,0.25)",
            padding: "0.4rem 0.9rem",
            borderRadius: 999,
            marginBottom: "1rem",
          }}
        >
          <span
            style={{ width: 6, height: 6, borderRadius: "50%", background: "#34d399", animation: "pulse-dot 2s infinite" }}
          />
          {contactConfig.subtitle}
        </div>

        <h2 className="contact-h2" style={{ fontSize: "clamp(3rem,9vw,8rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1, margin: "0 0 2.5rem" }}>
          LET'S CONNECT.
        </h2>

        <p className="contact-body" style={{ ...bodyText, maxWidth: 560, margin: "0 auto 2.5rem" }}>
          {contactConfig.body}
        </p>

        {/* primary + secondary CTA, same pairing pattern as buttons elsewhere on the site */}
        <div className="contact-body" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "1rem" }}>
          <div
            style={{
              display: "inline-block",
              fontFamily: "'Geist Mono', monospace",
              fontSize: 13,
              background: "#fff",
              color: "#000",
              padding: "1.1rem 2.5rem",
              borderRadius: 999,
              fontWeight: 700,
              textDecoration: "none",
              transition: "transform 0.2s, background 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#e5e5e5";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#fff";
              el.style.transform = "translateY(0)";
            }}
            onClick={() => sendEmail()}
          >
            {contactConfig.email}
          </div>

          <a
            href={contactConfig.resume}
            target='_blank'
            style={{
              display: "inline-block",
              fontFamily: "'Geist Mono', monospace",
              fontSize: 13,
              background: "transparent",
              color: "#fff",
              border: "1px solid rgba(148,163,184,0.3)",
              padding: "1.05rem 2.3rem",
              borderRadius: 999,
              fontWeight: 700,
              textDecoration: "none",
              transition: "transform 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(148,163,184,0.6)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(148,163,184,0.3)";
              el.style.transform = "translateY(0)";
            }}
          >
            ↓ Download Resume
          </a>
        </div>

        <div
          className="contact-body font-mono"
          style={{ paddingTop: "3.5rem", marginTop: "3.5rem", borderTop: "1px solid rgba(148,163,184,0.2)", display: "flex", justifyContent: "center", gap: "2.5rem", fontSize: 13, color: "#64748b" }}
        >
          {contactConfig.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.label} (opens in a new tab)`}
              style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s", display: "inline-flex", alignItems: "center", gap: 7 }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#fff"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#64748b"; }}
            >
              {s.icon}
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact