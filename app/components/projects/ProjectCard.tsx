import { cn } from '@/app/lib/utils';
import { Project } from '@/app/schemas/project.schema'
import React from 'react'
import Badge from '../ui/Badge';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
    onOpen: (project: Project) => void;
}

const ProjectCard = ({project, onOpen}: ProjectCardProps) => {
    const tech = project.technologies.slice(0,5);
    const remaining = project.technologies.length - tech.length;
    const liveUrl = project.links?.live;
  return (
    <article
    className={cn(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-7 text-left",
        "transition-colors duration-500 ease-out-expo hover:border-muted-foreground/50 hover:bg-surface-elevated",
    )}
    >
        <button
        type='button' 
        onClick={() => onOpen(project)}
        data-cursor
        aria-label={`Open case study: ${project.title}`}
        className='absolute inset-0 z-0 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'
        />

        <div className='pointer-events-none relative z-[1] mb-6 flex items-center justify-between  gap-4'>
            <span className='font-mono text-xs uppercase tracking-[0.2em] text-accent'>
                {project.category}
            </span>
            {project.year ? 
            (
                <span className='font-mono text-xs text-muted-foreground'>{project.year}</span>
            ): null}
        </div>

        <h3 className='pointer-events-none relative z-[1] font-display text-2xl font-medium text-foreground  transition-colors'>
            {project.title}
        </h3>
        <p className='pointer-events-none relative z-[1] mt-3 max-w-prose text-pretty leading-relaxed  text-muted-foreground'>
            {project.description}
        </p>

        {project.metrics && project.metrics.length > 0 ? (
            <dl className='pointer-events-none relative z-[1] mt-6 flex flex-wrap gap-x-8 gap-y-3'>
                {project.metrics.map((metric) => (
                    <div key={metric.label}>
                        <dt className='sr-only'>
                            {metric.label}
                        </dt>
                        <dd className='font-display text-xl font-semibold text-foreground'>
                            {metric.value}
                        </dd>
                        <p className='mt-0.5 text-xs text-muted-foreground'>{metric.label}</p>
                    </div>
                ))}
            </dl>
        ): null}

        {tech.length > 0 ? (
            <div className='pointer-events-none relative z-[1] mt-7 flex flex-wrap gap-2'>
                {tech.map((item) => (
                    <Badge key={item}>{item}</Badge>
                ))}
                {remaining > 0 ? <Badge>+{remaining}</Badge> : null}
            </div>
        ): null}

        <div className='relative z-[1] mt-8 flex items-center justify-between gap-4 pt-2'>
            <button
            type='button'
            onClick={() => onOpen(project)}
            data-cursor
            aria-label={`Open case study: ${project.title}`}
            className='flex items-center gap-2 rounded-md font-mono text-sm text-muted-foreground transition-colors hover:text-foreground group-hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'
            >
                View case study
                <ArrowUpRight className='h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
            </button>

            {liveUrl ? (
                <a href={liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                data-cursor
                onClick={(e) => e.stopPropagation()}
                aria-label={`Open live site: ${project.title} (opens in new tab)`}
                className={
                    cn(
                        "flex items-center gap-1.5 rounded-full border border-border px-3 p-1.5 font-mono text-xs text-muted-foreground",
                        "transition-colors hover:border-accent/50 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    )
                }
                >
                    Live
                    <ExternalLink className='h-3.5 w-3.5' />
                </a>
            ): null}
            </div>
    </article>
  )
}

export default ProjectCard