"use client";

import { prefersReduceMotion } from "@/app/lib/gsap";
import { cn } from "@/app/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { ReactNode, useRef } from "react";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

const Magnetic = ({ children, strength = 0.35, className }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;

      if (!el) return;
      if (prefersReduceMotion()) return;
      if (!window.matchMedia("(pointer: fine)").matches) return;

      const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

      const handleMove = (event: PointerEvent) => {
        const rect = el.getBoundingClientRect();
        const relX = event.clientX - (rect.left + rect.width / 2);
        const relY = event.clientY - (rect.top + rect.width / 2);

        xTo(relX * strength);
        yTo(relY * strength);
      };

      const reset = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener("pointermove", handleMove);
      el.addEventListener("pointerleave", reset);

      return () => {
        el.removeEventListener("pointermove", handleMove);
        el.removeEventListener("pointerleave", reset);
      };
    },
    { scope: ref },
  );
  return (
    <div ref={ref} className={cn("inline-flex", className)}>
      {children}
    </div>
  );
};

export default Magnetic;
