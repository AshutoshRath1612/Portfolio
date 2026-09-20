import { cn } from '@/app/lib/utils';
import React, { ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode;
    className?: string;
    size?: "default" | "prose";
}

const Container = ({children, className, size= "default"}: ContainerProps) => {
  return (
    <div 
    className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        size === "default" ? "max-w-content" : "max-w-prose",
        className
    )}>
        {children}
    </div>
  )
}

export default Container