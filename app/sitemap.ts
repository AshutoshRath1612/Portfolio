import { MetadataRoute } from "next";
import { getPortfolio } from "./lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
    const {seo} = getPortfolio();

    return [
        {
            url: seo.url,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        }
    ]
}