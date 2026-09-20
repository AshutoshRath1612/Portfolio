"use client";

import { SkillGroup } from "@/app/schemas/skill.schema";
import React, { useMemo, useState } from "react";
import Section from "../ui/Section";
import Reveal from "../animations/Reveal";
import { cn } from "@/app/lib/utils";

interface SkillsProps {
  skills: SkillGroup[];
}

const Skills = ({ skills }: SkillsProps) => {
  const [active, setActive] = useState<string | null>(null);

  const relations = useMemo(() => {
    const map = new Map<string, Set<string>>();
    const ensure = (name: string) => {
      if (!map.has(name)) map.set(name, new Set());
      return map.get(name)!;
    };

    for (const group of skills) {
      for (const skill of group.skills) {
        const set = ensure(skill.name);

        for (const related of skill.related ?? []) {
          set.add(related);
          ensure(related).add(skill.name);
        }
      }
    }
    return map;
  }, [skills]);

  const highlighted = useMemo(() => {
    if (!active) return null;
    return new Set<string>([active, ...(relations.get(active) ?? [])]);
  }, [active, relations]);

  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="What I build with"
      description='I work across the product stack, from interfaces and applications to APIs, data, cloud infrastructure, and AI-powered features.'
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3:">
        {skills.map((group, index) => (
          <Reveal key={group.category} delay={0.04 * index} effect="scale">
            <div className="h-full rounded-xl border border-border bg-surface p-6">
              <div className="mb-1 flex items-baseline justify-between gap-3">
                <h3 className="font-display text-lg font-medium text-foreground">
                  {group.category}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              {group.description ? (
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  {group.description}
                </p>
              ) : null}
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const dimmed =
                    highlighted !== null && !highlighted.has(skill.name);
                  const isActive = active === skill.name;

                  return (
                    <li key={skill.name}>
                      <button
                        type="button"
                        onMouseEnter={() => setActive(skill.name)}
                        onMouseLeave={() => setActive(null)}
                        onFocus={() => setActive(skill.name)}
                        onBlur={() => setActive(null)}
                        title={skill.name}
                        className={cn(
                          "flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-all duration-300",
                          isActive
                            ? "border-accent bg-accent/10 text-foreground"
                            : "border-border bg-surface-elevated text-muted-foreground",
                          dimmed
                            ? "opacity-30"
                            : "opacity-100 hover:text-foreground",
                        )}
                      >
                        {skill.featured ? (
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        ) : null}
                        {skill.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <p className="mt-8 flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span
            className="h-1.5 w-1.5 rounded-full bg-accent"
            aria-hidden="true"
          />
          Core technologies
        </p>
      </Reveal>
    </Section>
  );
};

export default Skills;
