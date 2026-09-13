import React from 'react'
import { navConfig } from '../configs/nav.config';
import { sendEmail } from '../utils/common-functions';

const Header = ({ navRefs, onNavClick }: { navRefs: React.RefObject<(HTMLSpanElement | null)[]>; onNavClick: (index: number) => void }) => {
  return (
    <header style={{
        position: "fixed", top: 0, left: 0, width: "100%", zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.25rem 3rem",
        borderBottom: "1px solid rgba(148,163,184,0.1)",
        background: "rgba(15,23,42,0.85)",
        backdropFilter: "blur(12px)",
      }}>
        <div className="font-mono" style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "#fff", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#6366f1", display: "inline-block", animation: "pulse 2s infinite" }} />
          ASHUTOSH<span style={{ color: "#818cf8" }}>RATH</span>
        </div>

        <nav style={{ display: "flex", gap: "1.5rem" }}>
          {navConfig.map((label, i) => (
            <span
              key={label}
              ref={(el) => { navRefs.current[i] = el; }}
              className="font-mono"
              style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: i === 0 ? "#818cf8" : "#64748b", transition: "color 0.3s", cursor: "pointer" }}
              onClick={() => onNavClick(i)}
            >
              //{label}
            </span>
          ))}
        </nav>

        <div className="font-mono" style={{
          fontSize: 12, background: "#fff", color: "#000",
          padding: "0.5rem 1.25rem", borderRadius: 999, fontWeight: 600,
          textDecoration: "none", transition: "background 0.2s", cursor: "pointer",
        }}
        onClick={() => sendEmail()}>
          Let's Talk
        </div>
      </header>
  )
}

export default Header