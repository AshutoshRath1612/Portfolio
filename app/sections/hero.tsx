import React from 'react'
import { badgeStyle, paneStyle } from '../shared-styles'
import { metadata } from '../configs/hero.config'

const Hero = ({ paneHero }: { paneHero: React.RefObject<HTMLElement | null> }) => {
    return (
        <section ref={paneHero} style={paneStyle(true)}>
            <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 6rem" }}>
                <div className="hero-badge font-mono" style={badgeStyle}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#818cf8", display: "inline-block" }} />
                    {metadata.role}
                </div>

                <div style={{ overflow: "hidden", marginBottom: 4 }}>
                    <h1 className="hero-h1" style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1, margin: 0 }}>
                        {metadata.name}
                    </h1>
                </div>
                <div style={{ overflow: "hidden", marginBottom: "2rem" }}>
                    <h2 className="hero-h2" style={{ fontSize: "clamp(2rem, 6vw, 5rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#2a2a2a", lineHeight: 1, margin: 0 }}>
                        {metadata.skills}
                    </h2>
                </div>

                <div className="hero-footer" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "2rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    <p style={{ color: "#737373", fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.7, maxWidth: 580, margin: 0 }}>
                        {metadata.description}
                    </p>
                    <div className="font-mono" style={{ fontSize: 11, color: "#404040", textAlign: "right" }}>
                        <div>{metadata.education}</div>
                    </div>
                    <div className='gap-4 flex mb-8'>
                        {metadata.buttons.map((button, index) => (
                            <a
                                key={index}
                                href={button.href}
                                target= "_blank"
                                className="font-mono"
                                style={{
                                    fontSize: 12,
                                    background: button.background,
                                    color: button.color,
                                    padding: "0.75rem 1.25rem",
                                    borderRadius: 999,
                                    fontWeight: 600,
                                    textDecoration: "none",
                                    transition: "background 0.2s",
                                    border: button.border ? button.border : "none",
                                }}
                            >
                                {button.label}
                            </a>
                        ))}
                    </div>
                </div>
                    <div style={{ color: "#818cf8", marginTop: 8 }} className="hero-scroll-text font-mono d-block m-auto w-auto max-w-content text-center">
                        Scroll to explore architecture ↓
                    </div>
            </div>
        </section>
    )
}

export default Hero