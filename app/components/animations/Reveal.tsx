"use client";

import { createScrollReveal, DURATION, EASE, prefersReduceMotion, RevealDirection, RevealEffect, revealFromVars, revealToVars } from '@/app/lib/gsap';
import { cn } from '@/app/lib/utils';
import { useGSAP } from '@gsap/react';
import React, { ElementType, ReactNode, useRef } from 'react'

interface RevealProps {
    children: ReactNode;
    as?: ElementType;
    direction?: RevealDirection;
    effect?: RevealEffect;
    distance?: number;
    delay?: number;
    duration?: number;
    className?: string;
    start?: string;
    once?: boolean;
}

const Reveal = ({
    children,
    as: Tag = "div",
    direction = "up",
    effect = "fade",
    distance,
    delay = 0,
    duration = DURATION.base,
    className,
    start = "top 85%",
    once = false,
}: RevealProps) => {

    const ref = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const el = ref.current;

            if (!el) return;

            if(prefersReduceMotion()) {
                gsap.set(el, {autoAlpha: 1});
                return;
            }

            createScrollReveal({
                trigger: el,
                targets: el,
                from: revealFromVars(direction,effect, distance),
                to: {...revealToVars(effect), duration, delay, ease:EASE},
                start,
                once,
            })
        },
        {scope: ref}
    )
  return (
    <Tag ref={ref} className={cn("will-reveal", className)}>
        {children}
    </Tag>
  )
}

export default Reveal