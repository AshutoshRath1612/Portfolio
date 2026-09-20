import { cn } from '@/app/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import React from 'react'
import { FaGithub } from 'react-icons/fa6';

interface GithubCardProps {
    href: string;
}

const GithubCard = ({href}: GithubCardProps) => {
  return (
    <a href={href}
    target='_blank'
    rel='noopener noreferrer'
    data-cursor
    aria-label='See more projects on Github (opens in a new tab)'
    className={cn(
        "group relative flex h-full min-h-[16rem] w-full flex-col items-start justify-center overflow-hidden rounded-2xl border border-border border-dashed bg-surface/40 p-7 text-left",
        "transition-colors duration-500 ease-out-expo hover:border-muted-foreground/60 hover:bg-surface",
    )}
    >
        <span className='flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-muted-foreground/60 group-hover:text-foreground'>
            <FaGithub className='h-5 w-5' />
        </span>

        <h3 className='mt-6 font-display text-2xl font-medium text-foreground'>
            More on Github
        </h3>
        <p className='mt-3 max-w-prose text-pretty leading-relaxed text-muted-foreground'>
            These are a few flagship builds. The rest of my work - experiments, libraries, and side projects - live on Github.
        </p>

        <div className='mt-8 flex items-center gap-2 pt-2 font-mono text-sm text-muted-foreground transition-colors group-hover:text-foreground'>
            Browse repositories
            <ArrowUpRight className='h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
        </div>
    </a>
  )
}

export default GithubCard