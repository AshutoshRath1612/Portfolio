import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]): string => {
    return twMerge(clsx(inputs));
}

export const buildMailTo = (email: string, subject?: string, body?: string): string => {
    const subjectQuery = subject ? `?subject=${encodeURIComponent(subject)}` : "";
    const bodyQuery = body ? `?body=${encodeURIComponent(body)}` : "";

    return `mailto:${email}${subjectQuery}${bodyQuery}`;
}

export const isExternalHref = (href: string): boolean => {
    return /^https?:\/\//i.test(href) || href.startsWith("mailto:");
}