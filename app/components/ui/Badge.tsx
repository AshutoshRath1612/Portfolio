import { cn } from '@/app/lib/utils';
import React, { ReactNode } from 'react'

interface BadgeProps {
    children: ReactNode;
    className?: string;
    variant?: "default" | "accent"
}

const Badge = ({children, className, variant="default"}: BadgeProps) => {
  return (
    <span 
    className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs tracking-tight",
        variant === "default" ? "border-border bg-surface text-muted-foreground"
        : "border-accent/30 bg-accent/10 text-accent",
        className
    )}>
        {children}
    </span>
  )
}

export default Badge