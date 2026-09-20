import z from "zod";
import { MetricsSchema } from "./common.schema";

export const ProjectArchitectureScehma = z.object({
    frontend: z.string().optional(),
    backend: z.string().optional(),
    database: z.string().optional(),
    infrastructure: z.string().optional(),
})

export type ProjectArchitecture = z.infer<typeof ProjectArchitectureScehma>;

export const ProjectLinkSchema = z.object({
    github: z.url().optional(),
    live: z.url().optional(),
    caseStudy: z.url().optional(),
})

export type ProjectLinks = z.infer<typeof ProjectLinkSchema>;

export const ProjectSchema = z.object({
    id: z.string().min(1),
    title: z.string().min(1),
    category: z.string().min(1),
    featured: z.boolean().optional(),
    year: z.string().optional(),
    description: z.string().min(1),
    longDescription: z.string().optional(),
    technologies: z.array(z.string()).default([]),
    metrics: z.array(MetricsSchema).optional(),
    links: ProjectLinkSchema.optional(),
    architecture: ProjectArchitectureScehma.optional(),
    highlights: z.array(z.string()).optional(),
    challenges: z.array(z.string()).optional(),
    solutions: z.array(z.string()).optional(),
    outcome: z.string().optional(),
    image: z.string().optional(),
})

export type Project = z.infer<typeof ProjectSchema>;