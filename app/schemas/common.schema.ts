import z from "zod";

export const CtaSchema = z.object({
    label: z.string().min(1),
    href: z.string().min(1),
    external: z.boolean().optional(),
});

export type Cta = z.infer<typeof CtaSchema>;

export const MetricsSchema = z.object({
    value: z.string().min(1),
    label: z.string().min(1),
})

export type Metric = z.infer<typeof MetricsSchema>;

export const NavItemSchema = z.object({
    label: z.string().min(1),
    href: z.string().min(1),
})

export type NavItem = z.infer<typeof NavItemSchema>;

export const SectionConfigScehma = z.object({
    id: z.string().min(1),
    enabled: z.boolean().default(true),
})

export type SectionConfig = z.infer<typeof SectionConfigScehma>;

export const SocialSchema = z.object({
    github: z.url().optional(),
    linkedin: z.url().optional(),
    email: z.email().optional(),
    twitter: z.url().optional(),
})

export type Social = z.infer<typeof SocialSchema>;