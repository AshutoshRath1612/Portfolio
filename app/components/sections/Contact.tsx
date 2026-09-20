import { buildMailTo } from "@/app/lib/utils";
import { Portfolio } from "@/app/schemas/portfolio.schema";
import React from "react";
import Section from "../ui/Section";
import Reveal from "../animations/Reveal";
import Magnetic from "../animations/Magnetic";
import { Button } from "../ui/Button";
import SocialLinks from "../ui/SocialLinks";

interface ContactProps {
  contact: Portfolio["contact"];
  social: Portfolio["social"];
  resumeHref: string;
}

const Contact = ({ contact, social, resumeHref }: ContactProps) => {
  const email = social.email;
  const mailto = email
    ? buildMailTo(email, contact.emailSubject, contact.emailBody)
    : undefined;

  return (
    <Section id="contact" flush className="py-section">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 sm:px-12 sm:py-24">
        <div
          aria-hidden="true"
          className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        />

        <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
          {contact.eyebrow ? (
            <Reveal>
              <span className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                  aria-hidden="true"
                >
                </span>
                  {contact.eyebrow}
              </span>
            </Reveal>
          ) : null}

          <Reveal delay={0.05}>
            <h2 className="text-balance text-display-md font-display font-medium text-foreground">
              {contact.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {contact.description}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {mailto ? (
                <Magnetic>
                  <Button href={mailto} size="lg" withArrow>
                    Get in touch
                  </Button>
                </Magnetic>
              ) : null}

              <Magnetic>
                <Button
                  href={resumeHref}
                  external
                  variant="secondary"
                  size="lg"
                >
                  View Resume
                </Button>
              </Magnetic>
            </div>
          </Reveal>

          {email ? (
            <Reveal delay={0.2} className="my-8">
              <a
                href={mailto}
                className="link-underline font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {email}
              </a>
            </Reveal>
          ) : null}

          <Reveal delay={0.25}>
            <div className="mt-8">
              <SocialLinks social={social} />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
