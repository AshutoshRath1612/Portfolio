import { Portfolio } from "@/app/schemas/portfolio.schema";
import React from "react";
import Container from "../ui/Container";
import Reveal from "../animations/Reveal";
import AnimatedText from "../animations/AnimatedText";
import Magnetic from "../animations/Magnetic";
import { Button } from "../ui/Button";
import SocialLinks from "../ui/SocialLinks";
import CodeEditor from "../effects/CodeEditor";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  hero: Portfolio["hero"];
  profile: Portfolio["profile"];
  social: Portfolio["social"];
  contact: Portfolio["contact"];
}

const Hero = ({ hero, profile, social, contact }: HeroProps) => {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-16 lg:pt-24"
    >
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center, black, transparent_75%)]"
      />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="flex flex-col items-start">
            <Reveal>
              <span className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {hero.eyebrow}
                {profile.availability ? (
                  <span className="hidden text-muted-foreground/70 sm:inline">
                    . {profile.availability}
                  </span>
                ) : null}
              </span>
            </Reveal>

            <AnimatedText
              as="h1"
              text={profile.name}
              className="font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-foreground"
              delay={0.1}
            />

            <AnimatedText
              as="p"
              text={hero.headline}
              className="mt-4 max-w-xl text-display-md font-display font-light text-muted-foreground"
              delay={0.35}
              stagger={0.03}
            />

            <Reveal delay={0.6} className="mt-8 max-w-lg">
              <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                {hero.description}
              </p>
            </Reveal>

            <Reveal delay={0.7}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <Button href={hero.primaryCta.href} size="lg" withArrow>
                    {hero.primaryCta.label}
                  </Button>
                </Magnetic>
                {hero.secondaryCta ? (
                  <Magnetic>
                    <Button
                      href={hero.secondaryCta.href}
                      external={hero.secondaryCta.external}
                      variant="secondary"
                      size="lg"
                    >
                      {hero.secondaryCta.label}
                    </Button>
                  </Magnetic>
                ) : null}
              </div>
            </Reveal>

            <Reveal delay={0.8}>
              <div className="mt-10 flex items-center gap-4">
                <SocialLinks social={social} emailBody={contact.emailBody}  emailSubject={contact.emailSubject} />
                <span className="h-px w-8 bg-border" aria-hidden="true" />
                <span className="font-mono text-xs text-muted-foreground">
                  {profile.location}
                </span>
              </div>
            </Reveal>
          </div>

          {hero.codePanel ? (
            <Reveal
              direction="none"
              delay={0.4}
              className="flex justify-center lg:justify-end"
            >
              <CodeEditor panel={hero.codePanel} />
            </Reveal>
          ) : null}
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-6 hidden justify-center lg:flex"
      >
        <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          Scroll
        </span>
      </div>
    </section>
  );
};

export default Hero;
