import afe from "@/assets/images/article-2.jpg";
import { PortfolioProject, FeaturedProject, ProjectDetail } from "@/assets/project/type";

export const projects: PortfolioProject[] = [
    {
        id: "ticket-bounty",
        title: 'Ticket Bounty',
        subtitle: 'Full-stack SaaS ticketing platform',
        image: afe,
        confidential: false
    },
    {
        id: "data-sights",
        title: 'ISDM DataSights',
        subtitle: 'SDG data visualization platform',
        image: afe,
        confidential: false,
    },
    {
        id: "afe-class-chats",
        title: 'Amazon Future Engineer - Class Chat',
        subtitle: 'Real-time learning portal',
        confidential: true,
        image: afe,
        stats: [
            { value: '~40%', label: 'faster feature rollout' },
            { value: '1000s', label: 'students & educators reached' },
        ],
    },
    {
        id: "mrc-portal",
        title: 'Jan Sahas MRC Portal',
        subtitle: 'Social protection platform',
        confidential: true,
        image: afe,
        stats: [
            { value: '3', label: 'role-based portal types' },
            { value: 'multi', label: 'tenant portal architecture' },
        ]
    },
];

export const featuredProject: FeaturedProject = {
    id: "ledger",
    title: 'Wood Ledger',
    label: 'personal project',
    description: "Built for my father's timber business — replaces paper-based wood quantity and pricing calculations with a simple PWA he can use on the shop floor.",
    tags: ['React', 'PWA', 'offline-first'],
};

export const projectDetails: Record<PortfolioProject["id"], ProjectDetail> = {
    "mrc-portal": {
        title: "Jan Sahas MRC Portal",
        subtitle:
            "Large-scale multi-tenant welfare portal for the Migrants Resilience Collaborative",
        isConfidential: true,
        tags: ["nda", "apr 2024 — may 2026"],
        stats: [
            { value: "DPDP", label: "compliant PII handling" },
            { value: "dynamic", label: "role & theme configuration" },
            { value: "2yr", label: "ongoing ownership" },
        ],
        problem:
            "Migrants across South Asia needed a way to register digitally and access government welfare schemes, but doing that at scale meant a multi-tenant platform where every partner organization could run its own configurable workflows, roles, and branding — without a separate build for each one.",
        deliverables: [
            "Owned the frontend architecture and enterprise-level features for a large-scale multi-tenant welfare portal",
            "Implemented dynamic role-based access control, letting roles and permissions be configured entirely from the admin side",
            "Built secure handling of PII with encryption/decryption flows and data masking to support DPDP compliance",
            "Developed a dynamic theming system so UI elements can be customized directly from the portal itself, per organization",
        ],
        tech: ["React.js", "TypeScript", "REST APIs", "Redux", "Tailwind CSS"],
    },

    "afe-class-chats": {
        title: "Amazon Future Engineer — Class Chats Portal",
        subtitle:
            "Virtual mentorship platform connecting Amazon volunteers with students",
        isConfidential: true,
        tags: ["nda", "mar 2022 — dec 2024"],
        stats: [
            { value: "~40%", label: "faster feature development" },
            { value: "1000s", label: "students & educators reached" },
            { value: "live", label: "real-time mentorship sessions" },
        ],
        problem:
            "Students from underserved communities often don't have access to professionals who could guide them toward a career in tech. The program needed to connect them virtually with volunteer mentors — mostly Amazon employees — for career guidance and interactive learning, but the platform was still running on an offline model that couldn't scale.",
        deliverables: [
            "Led end-to-end frontend development, transitioning the platform from an offline model to a fully interactive, real-time online experience covering mentorship, career guidance, and interactive learning sessions on topics like future careers, tech, and personal development",
            "Designed and built a modular, reusable component library from scratch, cutting development time by ~40% and enabling faster feature rollout without regressions",
            "Implemented real-time features using Socket.io for live mentor-student interactions",
            "Built scheduling and authentication flows used by thousands of students and educators",
        ],
        tech: ["React.js", "Socket.io", "REST APIs", "JavaScript", "CSS3"],
    },

    "data-sights": {
        title: "ISDM DataSights",
        subtitle:
            "One-stop data platform for exploring Sustainable Development Goals datasets",
        isConfidential: false,
        tags: ["nda", "jan 2024 — mar 2025"],
        stats: [
            { value: "10+", label: "interactive chart types" },
            { value: "one-stop", label: "multi-dataset platform" },
            { value: "launch", label: "core platform highlight" },
        ],
        problem:
            "Researchers, social sector professionals, and policymakers needed to bring together diverse datasets related to the Sustainable Development Goals in one place, and interact with them directly enough to make evidence-based decisions without leaving the platform.",
        deliverables: [
            "Built the entire frontend visualization layer using Plotly.js and Angular",
            "Made it easy for users to interact directly with data on the platform — filtering, exploring, and drawing conclusions without exporting or switching tools",
            "Supported complex, filterable dashboards that process large structured datasets in real time",
            "Delivered a polished, performant UI that became a core highlight of the platform's public launch",
        ],
        tech: ["Angular.js", "Plotly.js", "TypeScript", "REST APIs", "CSS3"],
    },

    "ticket-bounty": {
        title: "Ticket Bounty",
        subtitle:
            "Full-stack SaaS ticketing platform built end-to-end, UI to database",
        isConfidential: false,
        tags: ["live", "sep 2025 — jul 2026"],
        stats: [
            { value: "0", label: "third-party auth dependencies" },
            { value: "multi-tenant", label: "org & role support" },
            { value: "full-stack", label: "UI to database" },
        ],
        problem:
            "Wanted a project covering the complete software engineering journey — UI to database — while applying patterns like custom auth, React Server Components, and layered architecture rarely combined in one build.",
        deliverables: [
            "Implemented custom authentication and authorization from scratch (sign up, sign in, sessions, protected routes, server actions) without third-party auth services",
            "Built multi-tenant organization support with role-based memberships, email invitations, and permission-gated UI flows across user roles",
            "Applied advanced Next.js patterns including React Server Components, Server Actions, cursor-based pagination, and layered architecture (service, data access, public API layers)",
        ],
        tech: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Prisma",
            "Supabase",
            "Tailwind CSS",
            "Shadcn/UI",
            "Stripe",
            "AWS S3",
            "Inngest",
            "Zod",
        ],
    },

    "ledger": {
        title: "Wood Ledger",
        subtitle: "A PWA for timber calculations, contractor orders, and billing",
        isConfidential: true,
        tags: ["personal project", "2026"],
        stats: [
            { value: "PWA", label: "installable app" },
            { value: "auto", label: "volume & cost calculation" },
            { value: "PDF", label: "downloadable bills" },
        ],
        problem:
            "A real-world workflow where timber dimensions and quantities were recorded on paper, requiring manual calculations for total wood volume and cost. Contractor orders were tracked separately, making it difficult to manage quantities, pricing, project locations, and organisations in one place.",
        deliverables: [
            "Replaced the paper-based timber recording workflow with a digital, mobile-first PWA",
            "Automated timber volume and cost calculations, and built contractor order management covering quantities, pricing, project locations, and organisations",
            "Added Supabase-backed data persistence for timber records and contractor orders",
            "Implemented bill generation from contractor orders with downloadable PDF bills",
        ],
        tech: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "PWA", "PDF Generation"],
    },
};
