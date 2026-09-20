import "server-only";
import portfolioData from "@/app/content/portfolio.json";
import { Portfolio, PortfolioSchema } from "@/app/schemas/portfolio.schema"
import { Project } from "../schemas/project.schema";
import { Experience } from "../schemas/experience.schema";
import { SkillGroup } from "../schemas/skill.schema";
import { Certification } from "../schemas/certification.schema";


export const loadPortfolio = () => {
    const result = PortfolioSchema.safeParse(portfolioData);

    if (!result.success) {
        const issues = result.error.issues
        .map((issue) => `${issue.path.join(".") || "(root)"} : ${issue.message}`)
        .join("\n");

        throw new Error(`Invalid portfolio content in src/content/portfolio.json:\n${issues}`)
    }

    return result.data;
}

const portfolio = loadPortfolio();

export const getPortfolio = (): Portfolio => {
    return portfolio;
}

export const getProfile = () => { 
    return portfolio.profile;
}

export const getSocial = () => {
    return portfolio.social;
}

export const getEnabledSectionIds = (): string[] => {
    return portfolio.sections
    .filter((section) => section.enabled)
    .map((section) => section.id);
}

export const getNavigation = () => {
    const enabled = new Set(getEnabledSectionIds());
    const sectionIds = new Set(portfolio.sections.map((section) => section.id));

    return portfolio.navigation.filter((item) => {
        if (!item.href.startsWith("#")) return true;

        const id = item.href.slice(1);
        if (!sectionIds.has(id)) return true;

        return enabled.has(id);
    })
}

export const isSectionEnabled = (id: string): boolean => {
    return getEnabledSectionIds().includes(id);
}

export const getProjects = (): Project[] => {
    return portfolio.projects;
}

export const getExperience = (): Experience[] => {
    return portfolio.experience;
}

export const getSkills = (): SkillGroup[] => {
    return portfolio.skills;
}

export const getCertifications = (): Certification[] => {
    return portfolio.certifications;
}