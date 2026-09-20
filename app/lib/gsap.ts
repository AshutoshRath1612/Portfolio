"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const EASE = "power3.out";
export const EASE_EXPO = "expo.out";

export const DURATION = {
  fast: 0.4,
  base: 0.7,
  slow: 1.1,
} as const;

export type RevealDirection = "up" | "down" | "left" | "right" | "none";

export type RevealEffect = "fade" | "scale" | "blur" | "clip";

const OFFSET = 32;

const offsetVars = (direction: RevealDirection, distance: number) => {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return {};
  }
};

export const revealFromVars = (
  direction: RevealDirection = "up",
  effect: RevealEffect = "fade",
  distance: number = OFFSET,
) => {
  const base = { autoAlpha: 0, ...offsetVars(direction, distance) };

  switch (effect) {
    case "scale":
      return { ...base, scale: 0.94 };
    case "blur":
      return { ...base, filter: "blur(12px)" };
    case "clip":
      return { autoAlpha: 0, clipPath: "insert(0 0 100% 0)" };
    default:
      return base;
  }
};

export const revealToVars = (effect: RevealEffect = "fade") => {
  const base = { autoAlpha: 1, x: 0, y: 0 };

  switch (effect) {
    case "scale":
      return { ...base, scale: 1 };
    case "blur":
      return { ...base, filter: "blur(0px)" };
    case "clip":
      return { autoAlpha: 1, clipPath: "insert(0 0 0% 0)" };
    default:
      return base;
  }
};

export const fadeUpVars = (direction: RevealDirection = "up") => {
  return revealFromVars(direction, "fade");
};

interface ScrollRevealConfig {
  trigger: Element;
  targets: GSAPTweenTarget;
  from: GSAPTweenVars;
  to: GSAPTweenVars;
  start?: string;
  end?: string;
  once?: boolean;
}

export const createScrollReveal = ({
  trigger,
  targets,
  from,
  to,
  start = "top 88%",
  end = "bottom 12%",
  once = false,
}: ScrollRevealConfig) => {
  if (once) {
    gsap.set(targets, from);
    gsap.to(targets, { ...to, scrollTrigger: { trigger, start, once: true } });
    return;
  }

  gsap.set(targets, from);
  const animateIn = () => {
    gsap.to(targets, { ...to, overwrite: true });
  };

  const reset = () => {
    gsap.killTweensOf(targets);
    gsap.set(targets, from);
  };

  ScrollTrigger.create({
    trigger,
    start,
    end,
    onEnter: animateIn,
    onEnterBack: animateIn,
    onLeave: reset,
    onLeaveBack: reset,
  });
};

export const prefersReduceMotion = (): boolean => {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export { gsap, ScrollTrigger };
