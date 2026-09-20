import z from "zod";
import { MetricsSchema } from "./common.schema";

export const ExperienceScehma = z.object({
    id: z.string().min(1),
    company: z.string().min(1),
    role: z.string().min(1),
    period: z.string().min(1),
    location: z.string().optional(),
    summary: z.string().optional(),
    highlights: z.array(z.string()).optional(),
    technologies: z.array(z.string()).optional(),
    metrics: z.array(MetricsSchema).optional(),
    current: z.boolean().optional(),
})

export type Experience = z.infer<typeof ExperienceScehma>;