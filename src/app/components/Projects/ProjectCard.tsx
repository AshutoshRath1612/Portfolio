"use client";
import Image from "next/image";
import { forwardRef } from "react";
import styles from "./projects.module.css";
import { Project } from "@/app/models/project.model";

const ProjectCard = forwardRef<HTMLDivElement, { project: Project }>(
  ({ project }, ref) => {
    return (
      <div ref={ref} className={`${styles.card} projects-card`}>
        <Image
          src={project.image}
          alt={project.name}
          width={450}
          height={220}
          className={`${styles.image} ${
            project.name === "IoT Car Controller" ? styles.potraitImageCard : ""
          }`}
        />
        <div className={styles.projectInfo}>
          <h3 className={styles.projectName}>{project.name}</h3>
          <div className={styles.projectTechs}>
            {project.tech.map((tech, index) => (
              <span key={index} className={styles.techs}>
                {tech}
              </span>
            ))}
          </div>
          <p className={styles.projectDescription}>{project.description}</p>
          <div className={styles.projectLinks}>
            {project.links.map((link, index) => (
              <button
                key={index}
                className={styles.links}
                onClick={() => window.open(link.url, "_blank")}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;