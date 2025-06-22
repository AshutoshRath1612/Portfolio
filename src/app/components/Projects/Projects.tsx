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
    // Center the first card on load
    if (trackRef.current && containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const cardWidth = 450; // Larger card width
      trackRef.current.style.transform = `translateX(${(containerWidth - cardWidth) / 2}px)`;
    }

    // Title animation
    if (titleRef.current) {
      animate(titleRef.current, {
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: "easeOutExpo"
      });
    }

    // Card entrance animation
    animate(cardsRef.current, {
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: stagger(150),
      easing: "easeOutExpo"
    });

    // Continuous subtle floating animation
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      animate(card,{
        translateY: ["-5%", "5%"],
        duration: 3000 + index * 300,
        direction: "alternate",
        loop: true,
        easing: "easeInOutSine"
      });
    });

    const handleScroll = () => {
      const startScroll = window.innerHeight * 0.7;
      const scrollY = window.scrollY;

      if (scrollY < startScroll) return;

      const scrollProgress = (scrollY - startScroll) * 0.5;
      if (trackRef.current && containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const initialOffset = (containerWidth - 450) / 2;
        trackRef.current.style.transform = `translateX(${initialOffset - scrollProgress}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className={styles.container}>
      <div className={styles.stickyWrapper}>
        <h2 ref={titleRef} className={styles.title}>Featured Projects</h2>
        <div className={styles.trackWrapper}>
          <div ref={trackRef} className={styles.track}>
            {projects.map((proj, index) => (
              <ProjectCard 
                key={index} 
                project={proj} 
                ref={el => { cardsRef.current[index] = el; }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}