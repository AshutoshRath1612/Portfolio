import React from 'react'
import { bodyText, paneStyle } from '../shared-styles'
import { aboutConfig } from '../configs/about.config'

const About = ({paneAbout}: { paneAbout: React.RefObject<HTMLElement | null> }) => {
    return (
        <section ref={paneAbout} style={paneStyle(false)}>
            <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 6rem", width: "100%" }}>
                <div className="about-badge font-mono" style={{ fontSize: 11, color: "#818cf8", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "3rem" }}>
                    {aboutConfig.title}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: "6rem", alignItems: "start" }}>
                    <div>
                        <div style={{ overflow: "hidden", margin: "0 0 2rem"}}>
                            {aboutConfig.headings.map((heading, index) => (
                            <h2 className="about-h2" key={index} style={{ fontSize: "clamp(2rem,5vw,3.75rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.1 }}>
                                {heading}
                            </h2>

                            ))}
                        </div>
                        {aboutConfig.paragraphs.map((paragraph, index) => (
                            <p className="about-p" key={index} style={{ ...bodyText, marginTop: index === 0 ? 0 : "1.25rem" }}>
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div style={{ borderLeft: "1px solid rgba(148,163,184,0.2)", paddingLeft: "2rem", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                        {aboutConfig.metadatas.map(({ val, label, accent }) => (
                            <div key={label} className="about-stat">
                                <div style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: accent ? "#818cf8" : "#fff", marginBottom: 6 }}>{val}</div>
                                <div className="font-mono" style={{ fontSize: 10, color: "#64748b", letterSpacing: "0.12em" }}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About