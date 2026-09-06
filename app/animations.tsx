"use client";

import gsap from "gsap";

export const setInitialState = (
  trackRef: HTMLDivElement | null,
  paneHero: HTMLElement | null,
  paneAbout: HTMLElement | null,
  paneExp: HTMLElement | null,
  paneSkills: HTMLElement | null,
  paneProjects: HTMLElement | null,
  paneContact: HTMLElement | null,
  expWrapper: HTMLElement | null,
  projWrapper: HTMLElement | null,
  setNav: (progress: number) => void,
) => {
  const ctx = gsap.context(() => {
    gsap.set(paneHero, { opacity: 1, pointerEvents: "auto" });

    gsap.set([paneAbout, paneExp, paneSkills, paneProjects, paneContact], {
      opacity: 0,
      pointerEvents: "none",
    });

    const introTl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    introTl
      .fromTo(
        ".hero-badge",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7 },
      )
      .fromTo(
        ".hero-h1",
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.35",
      )
      .fromTo(
        ".hero-h2",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9 },
        "-=0.65",
      )
      .fromTo(
        ".hero-footer",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5",
      )
      .fromTo(
        ".hero-scroll-text",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.7 },
        "-=0.5",
      );

    gsap.set(".about-badge", { opacity: 0, y: 20 });
    gsap.set(".about-h2", { opacity: 0, y: 60 });
    gsap.set(".about-p", { opacity: 0, y: 40 });
    gsap.set(".about-stat", { opacity: 0, x: 50 });
    gsap.set(".exp-header", { opacity: 0, y: 30 });
    gsap.set(expWrapper, { opacity: 0, x: 120 });
    gsap.set(".skills-badge", { opacity: 0, y: 20 });
    gsap.set(".marquee-row", { opacity: 0, y: 90 });
    gsap.set(".skill-category", { opacity: 0, y: 40 });
    gsap.set(".proj-header", { opacity: 0, y: 30 });
    gsap.set(projWrapper, { opacity: 0, x: 120 });
    gsap.set(".contact-badge", { opacity: 0, y: 20 });
    gsap.set(".contact-h2", { opacity: 0, scale: 0.82 });
    gsap.set(".contact-body", { opacity: 0, y: 40 });

    gsap.utils.toArray<HTMLElement>(".marquee-row").forEach((row) => {
      const isRight = row.classList.contains("right");
      gsap.set(row, { xPercent: isRight ? -50 : 0 });
      gsap.to(row, {
        xPercent: isRight ? 0 : -50,
        duration: 26,
        ease: "none",
        repeat: -1,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trackRef,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
        onUpdate: (self) => setNav(self.progress),
      },
    });

    // ── HERO → ABOUT ───────────────────────────────────────────────────
    tl.to(".hero-badge", { opacity: 0, y: -20, duration: 0.6 })
      .to(
        ".hero-h1",
        { yPercent: -110, opacity: 0, duration: 1, ease: "power2.inOut" },
        "<",
      )
      .to(
        ".hero-h2",
        { yPercent: 110, opacity: 0, duration: 1, ease: "power2.inOut" },
        "<",
      )
      .to(".hero-footer", { opacity: 0, duration: 0.5 }, "<0.2")
      .to(".hero-scroll-text", { opacity: 0, x: 30, duration: 0.5 }, "<0.2")
      .set(paneHero, { opacity: 0, pointerEvents: "none" })
      .set(paneAbout, { opacity: 1, pointerEvents: "auto" })
      .fromTo(
        ".about-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, immediateRender: false },
        "-=0.1",
      )
      .fromTo(
        ".about-h2",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          immediateRender: false,
        },
        "<0.1",
      )
      .fromTo(
        ".about-p",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.18,
          duration: 0.9,
          immediateRender: false,
        },
        "<0.15",
      )
      .fromTo(
        ".about-stat",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.12,
          duration: 0.8,
          immediateRender: false,
        },
        "<0.2",
      )

      // ── ABOUT → EXPERIENCE ─────────────────────────────────────────────
      .to(
        paneAbout,
        { y: -80, opacity: 0, duration: 1, ease: "power2.inOut" },
        "+=0.5",
      )
      .set(paneAbout, { pointerEvents: "none" })
      .set(paneExp, { opacity: 1, pointerEvents: "auto" })
      .fromTo(
        ".exp-header",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, immediateRender: false },
        "-=0.1",
      )
      .fromTo(
        expWrapper,
        { opacity: 0, x: 120 },
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: "power3.out",
          immediateRender: false,
        },
        "<0.15",
      )
      .to(
        expWrapper,
        {
          x: () => {
            const nodes = expWrapper!.querySelectorAll(".exp-node");
            if (!nodes.length) return 0;
            const lastNode = nodes[nodes.length - 1] as HTMLElement;
            const lastDotPosition = lastNode.offsetLeft + 32;
            return window.innerWidth * 0.75 - lastDotPosition;
          },
          ease: "none",
          duration: 3,
        },
        "+=0.2",
      )

      // ── EXPERIENCE → SKILLS ────────────────────────────────────────────
      .to(
        paneExp,
        { scale: 0.95, opacity: 0, duration: 0.9, ease: "power2.inOut" },
        "+=0.4",
      )
      .set(paneExp, { pointerEvents: "none", scale: 1 })
      .set(paneSkills, { opacity: 1, pointerEvents: "auto" })

      .fromTo(
        ".skills-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, immediateRender: false },
        "-=0.1",
      )
      .fromTo(
        ".marquee-row",
        { opacity: 0, y: 90 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.18,
          duration: 1.1,
          ease: "power3.out",
          immediateRender: false,
        },
        "<0.1",
      )
      .fromTo(
        ".skill-category",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
          immediateRender: false,
        },
        "<0.2",
      )

      // ── SKILLS → PROJECTS ──────────────────────────────────────────────
      .to(
        paneSkills,
        { y: -80, opacity: 0, duration: 0.9, ease: "power2.inOut" },
        "+=0.5",
      )
      .set(paneSkills, { pointerEvents: "none" })
      .set(paneProjects, { opacity: 1, pointerEvents: "auto" })
      .fromTo(
        ".proj-header",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, immediateRender: false },
        "-=0.1",
      )
      .fromTo(
        projWrapper,
        { opacity: 0, x: 120 },
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: "power3.out",
          immediateRender: false,
        },
        "<0.15",
      )
      .to(
        projWrapper,
        {
          x: () => {
            const cards = projWrapper!.querySelectorAll(".proj-card");
            if (!cards.length) return 0;
            const lastCard = cards[cards.length - 1] as HTMLElement;
            const lastCardRight = lastCard.offsetLeft + lastCard.offsetWidth;
            return window.innerWidth * 0.75 - lastCardRight;
          },
          ease: "none",
          duration: 3,
        },
        "+=0.2",
      )

      // ── PROJECTS → CONTACT ─────────────────────────────────────────────
        .to(paneProjects, { scale: 1.04, opacity: 0, filter: "blur(8px)", duration: 0.9, ease: "power2.inOut" }, "+=0.4")
        .set(paneProjects, { pointerEvents: "none", scale: 1, filter: "none" })
        .set(paneContact,  { opacity: 1, pointerEvents: "auto" })
        .fromTo(".contact-badge", { opacity: 0, y: 20 },       { opacity: 1, y: 0, duration: 0.7, immediateRender: false }, "-=0.1")
        .fromTo(".contact-h2",    { opacity: 0, scale: 0.82 }, { opacity: 1, scale: 1, duration: 1.4, ease: "back.out(1.2)", immediateRender: false }, "<0.1")
        .fromTo(".contact-body",  { opacity: 0, y: 40 },       { opacity: 1, y: 0, stagger: 0.14, duration: 0.9, immediateRender: false }, "<0.2");
  });

  return () => ctx.revert();
};