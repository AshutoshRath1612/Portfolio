"use client";

import { prefersReduceMotion } from '@/app/lib/gsap';
import { Portfolio } from '@/app/schemas/portfolio.schema'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

type CodePanel = NonNullable<Portfolio["hero"]["codePanel"]>;
type Token = CodePanel["lines"][number][number];

const KIND_CLASS: Record<NonNullable<Token["k"]>, string> = {
    kw: "text-muted-foreground italic",
    str: "text-accent",
    prop: "text-foreground",
    fn: "text-foreground",
    num: "text-accent",
    punc: "text-muted-foreground/70",
    comment: "text-muted-foreground/60 italic"
};

const CodeEditor = ({panel}: {panel: CodePanel}) => {
    const wrapRef = useRef<HTMLDivElement>(null);
    const codeRef = useRef<HTMLDivElement>(null);
    const caretRef = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        const wrap = wrapRef.current;
        const code = codeRef.current;
        const caret = caretRef.current;

        if (!wrap || !code || !caret) return;

        if(prefersReduceMotion()) return;

        const chars = gsap.utils.toArray<HTMLElement>(code.querySelectorAll(".char"));

        if (chars.length === 0) return;

        const hideFrom = (start:number) => {
            for (let i = start; i < chars.length; i += 1) chars[i].style.display = "none";
        }

        const reset = () => {
            hideFrom(0);
            chars[0].before(caret);
        }

        reset();
        let shown = 0;

        const state = {i: 0};
        const tl = gsap.timeline({repeat: -1, repeatDelay: 1.6, onRepeat: reset});
        tl.to(state, {
            i: chars.length,
            ease: "none",
            duration: chars.length * 0.045,
            onUpdate: () => {
                const target = Math.floor(state.i);
                if(target === shown) return;

                for (let i = shown; i < target; i += 1) chars[i].style.display = "";
                shown = target;

                if (target > 0) chars[target - 1].after(caret);
            }
        });

        if (window.matchMedia("(pointer: fine)").matches) {
            const xTo = gsap.quickTo(wrap, "x", {duration: 0.8, ease: "power3.out"});
            const yTo = gsap.quickTo(wrap, "y", {duration: 0.8, ease: "power3.out"});

            const onMove = (event: PointerEvent) => {
                const rect = wrap.getBoundingClientRect();
                const relX = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
                const relY = (event.clientY - (rect.top + rect.height / 2)) / rect.height;

                xTo(relX * 14);
                yTo(relY * 14);
            }

            wrap.addEventListener("pointermove", onMove);
            wrap.addEventListener("pointerleave", () => {
                xTo(0);
                yTo(0);
            });

            return () => wrap.removeEventListener("pointermove", onMove);
        }
    }, {scope: wrapRef});

    const gutterWidth = String(panel.lines.length).length;

  return (
    <div ref={wrapRef} 
    aria-hidden = 'true'
    className='w-full max-w-[520px] overflow-hidden rounded-xl border border-border bg-surface font-mono shadow-elevated'>
        <div className='flex items-center gap-3 border-b border-border px-4 py-2.5'>
            <span className='flex gap-1.5' aria-hidden="true">
                <span className='h-2.5 w-2.5 rounded-full bg-border'/>
                <span className='h-2.5 w-2.5 rounded-full bg-border'/>
                <span className='h-2.5 w-2.5 rounded-full bg-border'/>
            </span>
            <span className='text-xs text-muted-foreground'>{panel.filename}</span>
        </div>
        <div className='grid grid-cols-[auto_1fr] gap-x-4 px-4 py-4 text-[13px] leading-[1.7]'>
            <div className='select-none text-right tabular-nums text-[11px] leading-[1.85] text-muted-foreground/40'>
                {panel.lines.map((_, index) => (
                    <div key={index}>{String(index + 1).padStart(gutterWidth, "0")}</div>
                ))}
            </div>
            <div ref={codeRef} className='min-w-0'>
                {panel.lines.map((tokens, lineIndex) => (
                    <div key={lineIndex} className='whitespace-pre'>
                        {tokens.map((token, tokenIndex) => (
                            <span key={tokenIndex} className={token.k ? KIND_CLASS[token.k]: "text-foreground"}>
                                {token.t.split("").map((ch,charIndex) => (
                                    <span key={charIndex} className='char'>
                                        {ch}
                                    </span>
                                ))}
                            </span>
                        ))}
                        <span className='char'>{""}</span>
                    </div>
                ))}
                <span ref={caretRef}
                aria-hidden="true"
                className='inline-block h-[1.05em] w-0.5 translate-y-[0.2em] bg-accent motion-safe:animate-caret' />
            </div>
        </div>
    </div>
  )
}

export default CodeEditor