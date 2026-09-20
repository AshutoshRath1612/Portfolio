import { cn } from "@/app/lib/utils";
import Reveal from "../animations/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "flex max-w-prose flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-6 bg-border" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05} effect="blur">
        <h2 className="text-display-md font-display font-medium text-balance text-foreground">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
};
