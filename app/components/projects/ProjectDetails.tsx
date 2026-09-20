"use client";

import { cn } from "@/app/lib/utils";
import { Project } from "@/app/schemas/project.schema";
import { ExternalLink, FileText, X } from "lucide-react";
import React, { ReactNode, useEffect, useRef } from "react";
import Badge from "../ui/Badge";
import { FaGithub } from "react-icons/fa6";

interface ProjectDetailsProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetails = ({ project, onClose }: ProjectDetailsProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  const open = project !== null;

  useEffect(() => {
    if (!open) return;

    restoreFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );

        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      restoreFocusRef.current?.focus?.();
    };
  }, [open, onClose]);

  if (!project) return null;

  const architecture = project.architecture
    ? (Object.entries(project.architecture).filter(([, value]) =>
        Boolean(value),
      ) as [string, string][])
    : [];

  const links = project.links ?? {};

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <button
        type="button"
        aria-label="Close case study"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-background/80 backdrop-blur-sm animate-fade-in"
      />

      <div
        ref={panelRef}
        className={cn(
          "relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden",
          "rounded-t-2xl border border-border bg-surface sm:rounded-2xl",
          "animate-fade-in",
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border p-6 sm:p-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {project.category}
              {project.year ? ` • ${project.year}` : null}
            </span>
            <h2
              id="project-modal-title"
              className="mt-2 font-display text-2xl font-medium text-foreground sm:text-3xl"
            >
              {project.title}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-surface-elevated hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <p className="text-pretty text-lg leading-relaxed text-foreground">
            {project.longDescription ?? project.description}
          </p>

          {project.metrics && project.metrics.length > 0 ? (
            <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-border py-6 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="sr-only">{metric.label}</dt>
                  <dd className="font-display text-2xl font-semibold text-foreground">
                    {metric.value}
                  </dd>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </dl>
          ) : null}

          {architecture.length > 0 ? (
            <Block title="Architecture">
              <dl className="grid gap-4 sm:grid-cols-2">
                {architecture.map(([layer, value]) => (
                  <div
                    key={layer}
                    className="rounded-lg border border-border bg-surface-elevated p-4"
                  >
                    <dt className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                      {layer}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Block>
          ) : null}

          {project.highlights && project.highlights.length > 0 ? (
            <Block title="Highlights">
              <List items={project.highlights} />
            </Block>
          ) : null}

          {project.challenges && project.challenges.length > 0 ? (
            <Block title="Challenges">
              <List items={project.challenges} />
            </Block>
          ) : null}

          {project.solutions && project.solutions.length > 0 ? (
            <Block title="Solutions">
              <List items={project.solutions} />
            </Block>
          ) : null}

          {project.outcome ? (
            <Block title="Outcome">
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {project.outcome}
              </p>
            </Block>
          ) : null}

          {project.technologies.length > 0 ? (
            <Block title="Technology">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Block>
          ) : null}

        </div>
          {links.github || links.live || links.caseStudy ? (
            <div className="flex flex-wrap gap-3 border-t border-border p-6 sm:p-8">
              {links.github ? (
                <ModalLink
                  href={links.github}
                  icon={<FaGithub className="h-4 w-4" />}
                >
                  Source
                </ModalLink>
              ) : null}
              {links.live ? (
                <ModalLink
                  href={links.live}
                  icon={<ExternalLink className="h-4 w-4" />}
                >
                  Live
                </ModalLink>
              ) : null}
              {links.caseStudy ? (
                <ModalLink
                  href={links.caseStudy}
                  icon={<FileText className="h-4 w-4" />}
                >
                  Case study
                </ModalLink>
              ) : null}
            </div>
          ) : null}
      </div>
    </div>
  );
};

const Block = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <section className="mt-8">
      <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </h3>
      {children}
    </section>
  );
};

const List = ({ items }: { items: string[] }) => {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-pretty leading-relaxed text-muted-foreground"
        >
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
  );
};

const ModalLink = ({
  href,
  icon,
  children,
}: {
  href: string;
  icon: ReactNode;
  children: ReactNode;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-foreground text-sm transition-colors hover:border-muted-foreground hover:bg-surface-elevated"
    >
      {icon}
      {children}
    </a>
  );
};
export default ProjectDetails;
