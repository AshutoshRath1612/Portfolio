import z from "zod";

export const SkillSchema = z.object({
    name: z.string().min(1),
    featured: z.boolean().optional(),
    related: z.array(z.string()).optional(),
})

export type Skill = z.infer<typeof SkillSchema>;

export const SkillGroupScehma = z.object({
    category: z.string().min(1),
    description: z.string().optional(),
    skills: z.array(SkillSchema).min(1),
})

export type SkillGroup = z.infer<typeof SkillGroupScehma>;