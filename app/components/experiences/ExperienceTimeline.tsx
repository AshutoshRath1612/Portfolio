"use client";

import {
  createScrollReveal,
  EASE,
  prefersReduceMotion,
  ScrollTrigger,
} from "@/app/lib/gsap";
import { Experience } from "@/app/schemas/experience.schema";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import ExperienceItem from "./ExperienceItem";

interface ExperienceTimelineProps {
  experience: Experience[];
}

const ExperienceTimeline = ({ experience }: ExperienceTimelineProps) => {
  const rootRef = useRef<HTMLOListElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const fill = fillRef.current;

      if (!root || !fill) return;

      const items = gsap.utils.toArray<HTMLElement>("[data-exp]", root);

      if (prefersReduceMotion()) {
        gsap.set(items, { autoAlpha: 1, x: 0 });
        gsap.set(fill, { clipPath: "inset(0 0 0% 0)" });

        items.forEach((el) => el.setAttribute("data-active", "true"));
        return;
      }

      gsap.set(fill, { clipPath: "inset(0 0 100% 0)" });
      gsap.to(fill, {
        clipPath: "inset(0 0 0% 0)",
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top 60%",
          end: "bottom 60%",
          scrub: 0.5,
        },
      });

      items.forEach((e) => {
        createScrollReveal({
          trigger: e,
          targets: e,
          from: { autoAlpha: 0, x: 24 },
          to: { autoAlpha: 1, x: 0, duration: 0.6, ease: EASE },
          start: "top 82%",
        });
        ScrollTrigger.create({
          trigger: e,
          start: "top 60%",
          end: "bottom 60%",
          onToggle: (self) => {
            e.setAttribute("data-active", String(self.isActive));
          },
        });
      });
    },
    { scope: rootRef },
  );

  return (
    <ol ref={rootRef} className="relative space-y-2 pl-11">
      <span
        aria-hidden="true"
        className="absolute left-3 top-1 bottom-3 w-px -translate-x-1/2 bg-border"
      />
      <span
        ref={fillRef}
        aria-hidden="true"
        className="absolute left-3 top-1 bottom-3 w-px -translate-x-1/2 bg-gradient-to-b from-accent via-accent to-accent/30"
      />

      {experience.map((item) => (
        <li
          key={item.id}
          data-exp
          className="group relative will-reveal space-y-8"
        >
          <span
            aria-hidden="true"
            className="absolute -left-8 top-1 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center"
          >
            <span className="h-5 w-5 rounded-full border-2 border-border bg-background transition-colors duration-500 group-data-[active=true]:border-accent" />
            <span className="absolute h-1.5 w-1.5 rounded-full bg-border transition-colors duration-500 group-data-[active=true]:bg-accent" />
            {item.current ? (
              <span className="absolute h-5 w-5 animate-pulse-signal rounded-full bg-accent/25" />
            ) : null}
          </span>
          <ExperienceItem experience={item} />
        </li>
      ))}
    </ol>
  );
};

export default ExperienceTimeline;
