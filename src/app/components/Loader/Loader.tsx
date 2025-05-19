import React, { useEffect, useRef, useState } from "react";
import { createTimeline, stagger, utils, waapi } from "animejs";

interface LoaderProps {
  text: string;
  onComplete: () => void;
}

export default function Loader({ text, onComplete }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [letters, setLetters] = useState<string[]>([]);

  // STEP 1: Update letters whenever text changes
  useEffect(() => {
    if (text) {
      setLetters(text.split(""));
    }
  }, [text]);

  // STEP 2: Animate only after letters are rendered
  useEffect(() => {
    if (letters.length === 0 || !containerRef.current) return;

    const targets = containerRef.current.querySelectorAll(".letter");

    utils.set(targets, {
      x: () => utils.random(-100, 100, 2) + "rem",
      y: () => utils.random(-100, 100, 2) + "rem",
      rotate: () => utils.random(0, 180),
      scale: () => utils.random(0.25, 1.5, 3),
    });

    const tl = createTimeline();

    tl.add(targets, {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      opacity: 1,
      delay: stagger(100),
      duration: 1000,
      easing: "easeOutElastic(1, .5)",
      scale: 1,
    });

    waapi.animate(targets, {
      translate: `0 -2rem`,
      delay: stagger(100),
      duration: 600,
      loop: true,
      alternate: true,
      ease: "inOut(2)",
    });

    const timeout = setTimeout(onComplete, 3000);
    return () => clearTimeout(timeout);
  }, [letters, onComplete]); // Animate only when `letters` updates

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
          gap: "20px",
          position: "relative",
        }}
      >
        {letters.map((char, idx) => (
          <span
            key={idx}
            className="letter"
            style={{
              display: "inline-block",
              fontSize: "4rem",
              color: "white",
              fontFamily: "monospace",
              margin: "0 10px",
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
