import { Project } from '@/app/schemas/project.schema'
import React from 'react'
import Section from '../ui/Section';
import ProjectGrid from '../projects/ProjectGrid';

interface ProjectProps {
    projects: Project[];
    githubUrl?: string;
}

const Projects = ({ projects, githubUrl }: ProjectProps) => {
  return (
    <Section
    id='projects'
    eyebrow='Selected work'
    title='Projects build end to end'
    description='Real systems, described generically to respect confidentially. Open any card for the architecture and engineering decisions behind it.'
    >
        <ProjectGrid projects={projects} githubUrl={githubUrl} />
    </Section>
  )
}

export default Projects