"use client";

import { Project } from "@/app/schemas/project.schema";
import React, { useState } from "react";
import Reveal from "../animations/Reveal";
import ProjectCard from "./ProjectCard";
import GithubCard from "./GithubCard";
import ProjectDetails from "./ProjectDetails";

interface ProjectGridProps {
  projects: Project[];
  githubUrl?: string;
}

const ProjectGrid = ({ projects, githubUrl }: ProjectGridProps) => {
  const [active, setActive] = useState<Project | null>(null);

  const single = projects.length == 1;
  return (
    <>
      <div className={single ? "grid gap-6" : "grid gap-6 sm:grid-cols-2"}>
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={0.06 * index} distance={56}>
            <ProjectCard project={project} onOpen={setActive} />
          </Reveal>
        ))}

        {githubUrl ? (
          <Reveal
            delay={0.06 * projects.length}
            distance={56}
            className={
              !single && projects.length % 2 === 0 ? "sm:col-span-2" : undefined
            }
          >
            <GithubCard href={githubUrl} />
          </Reveal>
        ) : null}
      </div>
      <ProjectDetails project={active} onClose={() => setActive(null)} />
    </>
  );
};

export default ProjectGrid;
