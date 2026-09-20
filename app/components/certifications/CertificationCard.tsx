import { cn } from "@/app/lib/utils";
import {
  Certification,
  CertificationType,
} from "@/app/schemas/certification.schema";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
import Badge from "../ui/Badge";

interface CertificationProps {
  certification: Certification;
}

const TYPE_LABEL: Record<CertificationType, string> = {
  certification: "Certification",
  badge: "Badge",
  award: "Award",
  recognition: "Recognition",
};

const CertificationCard = ({ certification }: CertificationProps) => {
  const { name, issuer, date, image, skills, credentialUrl } = certification;
  const type = certification.type ?? "certification";

  const interactive = Boolean(credentialUrl);
  const Root = interactive ? "a" : "article";
  const rootProps = interactive
    ? {
        href: credentialUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        "data-cursor": true,
        "aria-label": `Verify credential: ${name} (opens in a new tab)`,
      }
    : {};
  return (
    <Root
      {...rootProps}
      className={cn(
        "group relative flex h-full w-full flex-col rounded-2xl border border-border bg-surface p-6",
        interactive &&
          "transition-colors duration-500 ease-out-expo hover:border-muted-foreground/50 hover:bg-surface-elevated",
      )}
    >
      <div className="flex items-start gap-4">
        {image ? (
          <Image
            src={image}
            alt={`${name} - ${issuer}`}
            width={56}
            height={56}
            loading="lazy"
            decoding="async"
            className="h-14 w-14 shrink-0 rounded-lg border border-border bg-surface-elevated object-contain"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-elevated text-accent"
          >
            <BadgeCheck className="h-6 w-6" />
          </span>
        )}

        <div className="min-w-0 flex-1">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            {TYPE_LABEL[type]}
          </span>
          <h3 className="mt-1.5 font-display text-lg font-medium leading-snug text-foreground">
            {name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {issuer}
            {date ? (
              <span className="text-muted-foreground/60"> • {date}</span>
            ) : null}
          </p>
        </div>
      </div>

      {skills && skills.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      ) : null}

      {interactive ? (
        <div className="mt-6 flex items-center gap-2 pt-2 font-mono text-sm text-muted-foreground transition-colors group-hover:text-foreground">
          Verify credential
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      ) : null}
    </Root>
  );
};

export default CertificationCard;
