"use client";

import {
  createScrollReveal,
  DURATION,
  EASE,
  prefersReduceMotion,
  RevealDirection,
  RevealEffect,
  revealFromVars,
  revealToVars,
} from "@/app/lib/gsap";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { ElementType, ReactNode, useRef } from "react";

interface StaggerProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  direction?: RevealDirection;
  effect?: RevealEffect;
  distance?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  once?: boolean;
}

const Stagger = ({
  children,
  as: Tag = "div",
  className,
  direction = "up",
  effect = "fade",
  distance,
  delay = 0,
  stagger = 0.08,
  start = "top 85%",
  once = false,
}: StaggerProps) => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;

      if (!el) return;

      const targets = gsap.utils.toArray<HTMLElement>(el.children);

      if (targets.length == 0) return;

      if (prefersReduceMotion()) {
        gsap.set(targets, { autoAlpha: 1 });
        return;
      }

      createScrollReveal({
        trigger: el,
        targets,
        from: revealFromVars(direction, effect, distance),
        to: {
          ...revealToVars(effect),
          duration: DURATION.base,
          delay,
          ease: EASE,
          stagger,
        },
        start,
        once,
      });
    },
    { scope: ref },
  );
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
};

export default Stagger;
