import { StaticImageData } from "next/image";

export interface Project{
    name: string,
    tech: Array<string>,
    description: string,
    image: StaticImageData,
    links: Array<{
        name: string;
        url: string;
    }>;
}