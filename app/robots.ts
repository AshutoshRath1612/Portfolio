import { MetadataRoute } from "next";
import { getPortfolio } from "./lib/content";

export const robots = (): MetadataRoute.Robots => {
    const {seo} = getPortfolio();

    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${seo.url}/sitemap.xml`,
        host: seo.url,
    }
}