import { Portfolio } from "@/app/schemas/portfolio.schema";
import React from "react";
import Section from "../ui/Section";
import Reveal from "../animations/Reveal";
import Stagger from "../animations/Stagger";
import { Check } from "lucide-react";

interface AboutProps {
  about: Portfolio["about"];
}

const About = ({ about }: AboutProps) => {
  return (
    <Section id="about" eyebrow="About">
      <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <div>
          <Reveal effect="clip" duration={1}>
            <p className="text-balance text-display-md font-display font-light leading-tight text-foreground">
              {about.heading}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-8 max-w-prose text-pretty text-lg leading-relaxed text-muted-foreground">
              {about.lead}
            </p>
          </Reveal>
          <div className="mt-8 flex flex-col gap-5">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={0.05 * index}>
                <p className="max-w-prose text-pretty leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
        {about.highlights.length > 0 ? (
          <div className="lg:pt-2">
            <Reveal>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Focus Areas
              </p>
            </Reveal>
            <Stagger
              as="ul"
              className="flex flex-col gap-3"
              stagger={0.06}
              effect="scale"
              direction="none"
            >
              {about.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3.5 text-sm text-foreground"
                >
                  <Check
                    className="h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {highlight}
                </li>
              ))}
            </Stagger>
          </div>
        ) : null}
      </div>
    </Section>
  );
};

export default About;
