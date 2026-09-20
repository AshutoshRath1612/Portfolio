import z from "zod";

export const CertificationTypeSchema = z.enum([
    "certification",
    "badge",
    "award",
    "recognition",
])

export type CertificationType = z.infer<typeof CertificationTypeSchema>;

export const CertificationSchema = z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    issuer: z.string().min(1),
    type: CertificationTypeSchema.optional(),
    date: z.string().optional(),
    credentialId: z.string().optional(),
    credentialUrl: z.url().optional(),
    image: z.string().optional(),
    skills: z.array(z.string()).optional(),
})

export type Certification = z.infer<typeof CertificationSchema>;