import { StaticImageData } from "next/image";

export type Project = {
    title: string;
    category: string;
    image: StaticImageData | string;
    href: string;
};

export type TimelineEntry = {
    location: string;
    title: string;
    subtitle: string;
    dates: string;
    body: string[];
};

export type ListEntry = {
    title: string;
    meta: string;
    action: string;
    href: string;
};

export type StackItem = {
    title: string;
    description: string;
    tone: string;
    glyph: string;
};

export type Article = {
    title: string;
    source: string;
    date: string;
    summary: string;
    image: string;
    href: string;
};


export type SkillItem = {
    name: string;
    emphasized?: boolean;
};

export type SkillGroup = {
    category: string;
    tone: 'blue' | 'amber' | 'green' | 'coral' | 'purple' | 'teal';
    skills: SkillItem[];
};