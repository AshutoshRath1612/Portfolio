import { Experience } from "@/app/schemas/experience.schema";
import React from "react";
import Badge from "../ui/Badge";

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <article>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="font-display text-xl font-medium text-foreground">
          {experience.role}
          <span className="text-muted-foreground"> • {experience.company}</span>
        </h3>
        <span className="shrink-0 font-mono text-xs text-muted-foreground">
          {experience.period}
        </span>
      </div>

      {experience.location ? (
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          {experience.location}
        </p>
      ) : null}
      {experience.summary ? (
        <p className="mt-4 max-w-prose text-pretty leading-relaxed text-muted-foreground">
          {experience.summary}
        </p>
      ) : null}

      {experience.highlights && experience.highlights.length > 0 ? (
        <ul className="mt-5 flex flex-col gap-2.5">
          {experience.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-pretty leading-relaxed text-muted-foreground"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground"
                aria-hidden="true"
              />
                {highlight}
            </li>
          ))}
        </ul>
      ) : null}

      {experience.metrics && experience.metrics.length > 0 ? (
        <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
          {experience.metrics.map((metric) => (
            <div key={metric.label}>
              <dt className="sr-only">{metric.label}</dt>
              <dd className="font-display text-2xl font-semibold text-foreground">
                {metric.value}
              </dd>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {metric.label}
              </p>
            </div>
          ))}
        </dl>
      ) : null}

      {experience.technologies && experience.technologies.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      ) : null}
    </article>
  );
};

export default ExperienceItem;
