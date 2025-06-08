"use client";
import { useEffect, useRef } from "react";
import { animate } from "animejs";
import styles from "./projects.module.css";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants/Info";


export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const startScroll = 1700;
      const scrollY = window.scrollY;

      if (scrollY < startScroll) return;

      const relativeScroll = scrollY - startScroll;
      if(trackRef.current)
      animate(trackRef.current, {
        translateX: -relativeScroll,
        easing: "easeOutQuad",
        duration: 300,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className={styles.container}>
      <div className={styles.stickyWrapper}>
        <h2 className={styles.title}>Recent Work</h2>
        <div className={styles.trackWrapper}>
          <div ref={trackRef} className={styles.track}>
            {projects.map((proj, index) => (
              <ProjectCard key={index} project={proj} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
