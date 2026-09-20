"use client";

import { DURATION, prefersReduceMotion } from "@/app/lib/gsap";
import { cn } from "@/app/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { ElementType, Fragment, useRef } from "react";

interface AnimateTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  onScroll?: boolean;
}

const AnimatedText = ({
  text,
  as: Tag = "span",
  className,
  delay = 0,
  stagger = 0.06,
  onScroll = false,
}: AnimateTextProps) => {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const inners = gsap.utils.toArray<HTMLElement>(
        el.querySelectorAll("[data-word-inner]"),
      );

      if (inners.length === 0) return;

      if (prefersReduceMotion()) {
        gsap.set(inners, { yPercent: 0, autoAlpha: 1 });
        return;
      }

      gsap.set(inners, { yPercent: 110 });
      gsap.to(inners, {
        yPercent: 0,
        duration: DURATION.base,
        ease: "power4.out",
        delay,
        stagger,
        ...(onScroll
          ? { scrollTrigger: { trigger: el, start: "top 85%", once: true } }
          : {}),
      });
    },
    { scope: ref },
  );
  return (
    <Tag ref={ref} className={cn(className)} aria-label={text}>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span
            aria-hidden="true"
            className="inline-block overflow-hidden align-bottom"
          >
            <span
              data-word-inner
              className="inline-block will-change-transform"
            >
              {word}
            </span>
          </span>
          {index < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </Tag>
  );
};

export default AnimatedText;
