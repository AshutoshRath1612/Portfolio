"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Header from "./components/header";
import { useEffect, useRef } from "react";
import Hero from "./sections/hero";
import { setInitialState } from "./animations";
import About from "./sections/about";
import Experience from "./sections/experience";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Contact from "./sections/contact";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const navRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Pane refs
  const paneHero = useRef<HTMLElement>(null);
  const paneAbout = useRef<HTMLElement>(null);
  const paneExp = useRef<HTMLElement>(null);
  const paneSkills = useRef<HTMLElement>(null);
  const paneProjects = useRef<HTMLElement>(null);
  const paneContact = useRef<HTMLElement>(null);

  // Horizontal wrappers
  const expWrapper = useRef<HTMLDivElement>(null);
  const projWrapper = useRef<HTMLDivElement>(null);

  // Nav thresholds match the timeline's section boundaries (0–1 progress)
  const NAV_THRESHOLDS = [0, 0.12, 0.26, 0.57, 0.68, 0.96];
  
  const setNav = (progress: number) => {
    console.log(progress)
    let active = 0;
    for (let i = NAV_THRESHOLDS.length - 1; i >= 0; i--) {
      if (progress >= NAV_THRESHOLDS[i]) { active = i; break; }
    }
    navRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.color = i === active ? "#818cf8" : "#64748b";
    });
  };

  const scrollToNavSection = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const progress = NAV_THRESHOLDS[index] ?? 0;
    const trackTop = track.getBoundingClientRect().top + window.scrollY;
    const scrollDistance = track.offsetHeight - window.innerHeight;

    window.scrollTo({
      top: trackTop + scrollDistance * progress,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const ctx = setInitialState(trackRef.current, 
      paneHero.current, 
      paneAbout.current, 
      paneExp.current,
      paneSkills.current, 
      paneProjects.current,
      paneContact.current,
      expWrapper.current, 
      projWrapper.current, 
      setNav);

    return ctx; // Cleanup GSAP context on unmount
  }, []);

  return (
    <div style={{ background: "#0f172a", color: "#f1f5f9", fontFamily: "'Geist', sans-serif" }}>
      {/* ── fixed backgrounds ─────────────────────────────────────────── */}
      <div className="grid-bg" />
      <div className="ambient-glow" />

      <Header navRefs={navRefs} onNavClick={scrollToNavSection} />

      <div ref={trackRef} style={{ position: "relative", width: "100%", height: "1600vh" }}>
        <div ref={viewportRef} style={{
          position: "sticky", top: 0, width: "100%", height: "100vh",
          overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 10,
        }}>
          <Hero paneHero={paneHero} />
          <About paneAbout={paneAbout} />
          <Experience paneExp={paneExp} expWrapper={expWrapper} />
          <Skills paneSkills={paneSkills} />
          <Projects paneProjects={paneProjects} projWrapper={projWrapper} />
          <Contact paneContact={paneContact} />
        </div>
      </div>
    </div>
  );
}
