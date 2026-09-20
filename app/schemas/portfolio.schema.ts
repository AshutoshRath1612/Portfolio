import z from "zod";
import { CtaSchema, NavItemSchema, SectionConfigScehma, SocialSchema } from "./common.schema";
import { SkillGroupScehma } from "./skill.schema";
import { ProjectSchema } from "./project.schema";
import { ExperienceScehma } from "./experience.schema";
import { CertificationSchema } from "./certification.schema";

const ProfileSchema = z.object({
    name: z.string().min(1),
    title: z.string().min(1),
    tagline: z.string().min(1),
    description: z.string().min(1),
    location: z.string().optional(),
    availability: z.string().optional(),
    resume: z.string().min(1),
})

const CodeTokenSchema = z.object({
    t: z.string(),
    k: z.enum(["kw", "str", "prop", "fn", "num", "punc", "comment"]).optional(),
});

const CodePanelSchema = z.object({
    filename: z.string().min(1),
    lines: z.array(z.array(CodeTokenSchema)),
});

const HeroSchema = z.object({
    eyebrow: z.string().min(1),
    headline: z.string().min(1),
    description: z.string().min(1),
    primaryCta: CtaSchema,
    secondaryCta: CtaSchema.optional(),
    codePanel: CodePanelSchema.optional(),
});

const AboutSchema = z.object({
    heading: z.string().min(1),
    lead: z.string().min(1),
    paragraphs: z.array(z.string()).default([]),
    highlights: z.array(z.string()).default([]),
});

// A stage in the "From Code to Cloud" pipeline
const PipelineStageSchema = z.object({
    label: z.string().min(1),
    description: z.string().min(1),
})

const EngineeringSchema = z.object({
    codeToCloud: z.object({
        heading: z.string().min(1),
        description: z.string().min(1),
        stages: z.array(PipelineStageSchema).min(2),
    })
})

const SeoSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    url: z.url(),
    keywords: z.array(z.string()).default([]),
    ogImage: z.string().optional(),
})

const ContactSchema = z.object({
    eyebrow: z.string().optional(),
    heading: z.string().min(1),
    description: z.string().min(1),
    emailSubject: z.string().optional(),
    emailBody: z.string().optional(),
})

export const PortfolioSchema = z.object({
    seo: SeoSchema,
    profile: ProfileSchema,
    social: SocialSchema,
    navigation: z.array(NavItemSchema).min(1),
    sections: z.array(SectionConfigScehma).min(1),
    hero: HeroSchema,
    about: AboutSchema,
    skills: z.array(SkillGroupScehma).min(1),
    projects: z.array(ProjectSchema).min(1),
    experience: z.array(ExperienceScehma).min(1),
    certifications: z.array(CertificationSchema).min(1),
    engineering: EngineeringSchema,
    contact: ContactSchema,
});

export type Portfolio = z.infer<typeof PortfolioSchema>;