import React, { useEffect, useRef, useState } from "react";
import { createTimeline, stagger, utils, waapi } from "animejs";
import { LoaderProps } from "@/app/models/loader.model";

export default function Loader({ text, onComplete }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [letters, setLetters] = useState<string[]>([]);
  const [fontSize, setFontSize] = useState("4rem"); // Default font size

  // Update letters whenever text changes
  useEffect(() => {
    if (text) {
      setLetters(text.split(""));
    }
  }, [text]);

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      // Adjust font size based on viewport width
      const viewportWidth = window.innerWidth;
      if (viewportWidth < 768) { // Mobile
        setFontSize("2rem");
      } else if (viewportWidth < 1024) { // Tablet
        setFontSize("3rem");
      } else { // Desktop
        setFontSize("4rem");
      }
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation logic
  useEffect(() => {
    if (letters.length === 0 || !containerRef.current) return;

    const targets = containerRef.current.querySelectorAll(".letter");

    // Adjust animation values based on screen size
    const isMobile = window.innerWidth < 768;
    const randomRange = isMobile ? 50 : 100;

    utils.set(targets, {
      x: () => utils.random(-randomRange, randomRange, 2) + "rem",
      y: () => utils.random(-randomRange, randomRange, 2) + "rem",
      rotate: () => utils.random(0, 180),
      scale: () => utils.random(0.25, 1.5, 3),
    });

    const tl = createTimeline();

    tl.add(targets, {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      opacity: 1,
      delay: stagger(isMobile ? 50 : 100), // Faster stagger on mobile
      duration: isMobile ? 800 : 1000, // Slightly faster on mobile
      easing: "easeOutElastic(1, .5)",
      scale: 1,
    });

    waapi.animate(targets, {
      translate: `0 ${isMobile ? "-1rem" : "-2rem"}`,
      delay: stagger(isMobile ? 50 : 100),
      duration: isMobile ? 400 : 600,
      loop: true,
      alternate: true,
      ease: "inOut(2)",
    });

    const timeout = setTimeout(onComplete, 3000);
    return () => clearTimeout(timeout);
  }, [letters, onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0d0d0d",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        overflow: "hidden",
      }}
    >
      <div
        ref={containerRef}
        style={{
          display: "flex",
          flexWrap: "wrap", // Allow wrapping on small screens
          justifyContent: "center",
          gap: "clamp(10px, 2vw, 20px)", // Responsive gap
          position: "relative",
          maxWidth: "90vw", // Prevent overflow on mobile
        }}
      >
        {letters.map((char, idx) => (
          <span
            key={idx}
            className="letter"
            style={{
              display: "inline-block",
              fontSize: fontSize,
              color: "white",
              fontFamily: "monospace",
              margin: "0 clamp(5px, 1vw, 10px)", // Responsive margin
              opacity: 0, // Start invisible (will be animated)
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}