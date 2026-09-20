import { Portfolio } from "@/app/schemas/portfolio.schema";
import React from "react";
import Section from "../ui/Section";
import Reveal from "../animations/Reveal";
import CodePipeline from "../engineering/CodePipeline";

interface EngineeringProps {
  engineering: Portfolio["engineering"];
}

const Engineering = ({ engineering }: EngineeringProps) => {
  const { codeToCloud } = engineering;
  return (
    <Section
      id="engineering"
      eyebrow="How I work"
      title="Engineering, end to end"
      description="I work across application engineering, cloud, and AI building the interfaces and services people use, working with the data and infrastructure behind them, and applying AI where it can make software more capable and development more effective."
    >
      <Reveal>
        <div className="rounded-2xl border border-border bg-surface p-7 sm:p-9">
          <h3 className="font-display text-xl font-medium text-foreground">
            {codeToCloud.heading}
          </h3>
          <p className="mt-2 max-w-prose text-pretty leading-relaxed text-muted-foreground">
            {codeToCloud.description}
          </p>

          <CodePipeline stages={codeToCloud.stages} />
        </div>
      </Reveal>
    </Section>
  );
};

export default Engineering;
