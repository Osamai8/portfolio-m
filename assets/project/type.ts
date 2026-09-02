import { StaticImageData } from "next/image";

export type ProjectStat = {
    value: string;
    label: string;
};

export type ProjectNameEnum = "ticket-bounty" | "data-sights" | "afe-class-chats" | "mrc-portal" | "ledger";

export type PortfolioProject = {
    id: ProjectNameEnum;
    title: string;
    subtitle: string;
    image: StaticImageData;
    confidential?: boolean;
    stats?: ProjectStat[];
};

export type FeaturedProject = {
    id: ProjectNameEnum;
    title: string;
    label: string;
    description: string;
    tags: string[];
};


export type ProjectDetail = {
    title: string;
    subtitle: string;
    isConfidential: boolean;
    tags: string[];
    stats: Array<{ value: string; label: string }>;
    problem: string;
    deliverables: string[];
    tech: string[];
    images?: string[];
    link?: string;
};

