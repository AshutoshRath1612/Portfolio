"use client";
import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import styles from "./projects.module.css";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants/Info";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Title animation
    if (!titleRef.current) return;
    animate(titleRef.current, {
      translateY: [-30, 0],
      opacity: [0, 1],
      duration: 800,
      easing: "easeOutExpo",
    });

    // Card entrance animation
    animate(cardsRef.current, {
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: stagger(150),
      easing: "easeOutExpo",
    });

    // Continuous subtle floating animation
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      animate(card, {
        translateY: ["-5%", "5%"],
        duration: 3000 + index * 300,
        direction: "alternate",
        loop: true,
        easing: "easeInOutSine",
      });
    });

   let ticking = false;

  const handleScroll = () => {
    const startScroll = 1400;
    const scrollY = window.scrollY;
    if (scrollY < startScroll) return;

    const relativeScroll = scrollY - startScroll;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${relativeScroll}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  };
    // const handleResize = () => updateTrackPosition();

    window.addEventListener("scroll", handleScroll);
    // window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.container}>
      <div className={styles.stickyWrapper}>
        <h2 ref={titleRef} className={styles.title}>
          Featured Projects
        </h2>
        <div className={styles.trackWrapper}>
          <div ref={trackRef} className={styles.track}>
            {projects.map((proj, index) => (
              <ProjectCard
                key={index}
                project={proj}
                ref={(el) => { cardsRef.current[index] = el; }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
