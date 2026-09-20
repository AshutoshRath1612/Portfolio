"use client";

import {
  createScrollReveal,
  EASE,
  prefersReduceMotion,
  ScrollTrigger,
} from "@/app/lib/gsap";
import { cn } from "@/app/lib/utils";
import { Portfolio } from "@/app/schemas/portfolio.schema";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

type Stages = Portfolio["engineering"]["codeToCloud"]["stages"];

const CodePipeline = ({ stages }: { stages: Stages }) => {
  const rootRef = useRef<HTMLOListElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const fill = fillRef.current;

      if (!root || !fill) return;

      const items = gsap.utils.toArray<HTMLElement>("[data-stage]", root);

      if (prefersReduceMotion()) {
        gsap.set(items, { autoAlpha: 1, x: 0 });
        gsap.set(fill, { scaleY: 1 });
        items.forEach((el) => el.setAttribute("data-active", "true"));
        return;
      }

      gsap.set(fill, { scaleY: 0, transformOrigin: "50% 0%" });
      gsap.to(fill, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top 74%",
          end: "bottom 74%",
          scrub: true,
        },
      });

      items.forEach((el) => {
        createScrollReveal({
          trigger: el,
          targets: el,
          from: { autoAlpha: 0, x: 24 },
          to: { autoAlpha: 1, x: 0, duration: 0.6, ease: EASE },
          start: "top 82%",
        });
        ScrollTrigger.create({
          trigger: el,
          start: "top 82%",
          onEnter: () => el.setAttribute("data-active", "true"),
          onLeaveBack: () => el.setAttribute("data-active", "false"),
        });
      });
    },
    { scope: rootRef },
  );
  return (
    <ol ref={rootRef} className="relative mt-8 space-y-4 pl-11">
      <span
        aria-hidden="true"
        className="absolute left-3 top-4 bottom-4 w-px -translate-x-1/2 bg-border"
      />

      <span
        ref={fillRef}
        aria-hidden="true"
        className="absolute left-3 top-4 bottom-4 w-px -translate-x-1/2 bg-gradient-to-b from-accent via-accent to-accent/30"
      />

      {stages.map((stage, index) => (
        <li key={stage.label} data-stage className="group relative will-reveal">
          <span
            aria-hidden="true"
            className={cn(
              "absolute -left-8 top-3 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full ",
              "border border-border bg-surface font-mono text-[10px] leading-none text-muted-foreground transition-colors",
              "duration-500 group-data-[active=true]: bg-accent group-data-[active=true]:text-accent-foreground",
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="rounded-xl border border-border bg-surface-elevated p-4 transition-colors duration-500 group-data-[active=true]:border-accent/50">
            <span className="font-mono text-sm text-foreground">
              {stage.label}
            </span>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {stage.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default CodePipeline;
