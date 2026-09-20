"use client";

import { prefersReduceMotion } from "@/app/lib/gsap";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const roofRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const enableCursor = () => {
      const fine = window.matchMedia("(pointer: fine)").matches;
      if (!fine || prefersReduceMotion()) return;
      setEnabled(true);
    };

    enableCursor();
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const root = roofRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!root || !dot || !ring) return;

    document.documentElement.classList.add("has-custom-cursor");

    gsap.set(root, { autoAlpha: 0 });

    let shown = false;

    const xDot = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power3.out" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power3.out" });
    const xRing = gsap.quickTo(ring, "x", {
      duration: 0.45,
      ease: "power3.out",
    });
    const yRing = gsap.quickTo(ring, "y", {
      duration: 0.45,
      ease: "power3.out",
    });

    const move = (event: PointerEvent) => {
      if (!shown) {
        shown = true;
        gsap.set([dot, ring], { x: event.clientX, y: event.clientY });
        gsap.to(root, { autoAlpha: 1, duration: 0.3, ease: "power2.out" });
      }

      xDot(event.clientX);
      yDot(event.clientY);
      xRing(event.clientX);
      yRing(event.clientY);
    };

    const isInteractive = (target: EventTarget | null) =>
      target instanceof Element && !!target.closest("a, button, [data-cursor]");

    const over = (event: PointerEvent) => {
      if (isInteractive(event.target)) {
        gsap.to(ring, {
          scale: 1.8,
          opacity: 0.9,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    const out = (event: PointerEvent) => {
      if (isInteractive(event.target)) {
        gsap.to(ring, {
          scale: 1,
          opacity: 0.5,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    const leave = () =>
      gsap.to(root, { autoAlpha: 0, duration: 0.25, ease: "power2.out" });
    const enter = () => {
      if (shown)
        gsap.to(root, { autoAlpha: 1, duration: 0.25, ease: "power2.out" });
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", over);
    document.addEventListener("pointerout", out);
    document.documentElement.addEventListener("pointerleave", leave);
    document.documentElement.addEventListener("pointerenter", enter);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerout", out);
      document.documentElement.removeEventListener("pointerleave", leave);
      document.documentElement.removeEventListener("pointerenter", enter);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div
      ref={roofRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block"
    >
      <div
        ref={ringRef}
        className="fixed left-0 top-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent opacity-50"
      />
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
      />
    </div>
  );
};

export default Cursor;
