import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { featuredProject } from "@/assets/project/data";
import type { PortfolioProject } from "@/assets/project/type";

interface ProjectCardProps {
    project: PortfolioProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Link
            href={`/work/${project.id}`}
            className="block overflow-hidden rounded-[10px] border border-white/6 bg-[#191919] text-[#f2f2ee] transition-colors hover:border-white/12 group"
        >
            <div className="h-35 overflow-hidden border-b border-white/6 bg-[#202020]">
                <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    width={800}
                    height={560}
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
            </div>

            <div className="p-3.5">
                <div className="flex items-center justify-between gap-3">
                    <h3 className="m-0 text-[16px] font-medium leading-[1.2] tracking-[-0.02em] text-[#f2f2ee]">
                        {project.title}
                    </h3>
                    <span className="flex h-8 w-8 items-center justify-center text-[#b0b0aa]">
                        <ArrowUpRight className="h-4 w-4" />
                    </span>
                </div>
                <p className="mt-1.75 text-[13px] leading-[1.35] text-[#6b6b67] font-ui-mono">
                    {project.subtitle}
                </p>
            </div>
        </Link>
    );
};

const LedgerProjectCard = () => {
    return (
        <Link href={`/work/${featuredProject.id}`}>
            <div className="grid min-h-55 grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] overflow-hidden rounded-[10px] border border-white/6 bg-[#191919] max-[620px]:grid-cols-1">
                <div
                    className="flex min-h-55 items-center justify-center bg-[#161616] p-7.5 max-[620px]:min-h-40"
                    aria-hidden="true"
                >
                    <div
                        className="relative flex min-h-37.5 w-full max-w-47.5 flex-col justify-center overflow-hidden border border-[#c9713f]/30 bg-[#1d1d1b] p-6"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(201,113,63,.16), transparent 58%)",
                        }}
                    >
                        <span className="font-ui-mono text-[28px] leading-none tracking-[-0.08em] text-[#c9713f]">
                            WL
                        </span>
                        <span className="mt-4.5 block h-px w-[92%] bg-white/40" />
                        <span className="mt-2.25 block h-px w-[58%] bg-white/20" />
                        <span
                            className="absolute bottom-5.75 right-6 h-10.5 w-10.5 opacity-50"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(201,113,63,.62) 1px, transparent 1px), linear-gradient(90deg, rgba(201,113,63,.62) 1px, transparent 1px)",
                                backgroundSize: "10px 10px",
                            }}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center px-7 py-6.5 max-[620px]:px-4.5 max-[620px]:py-5.5">
                    <p className="mb-2.25 font-ui-mono text-[11px] uppercase tracking-[0.12em] leading-[1.3] text-[#c9713f]">
                        {featuredProject.label}
                    </p>
                    <h3 className="m-0 text-[16px] font-medium leading-[1.2] text-[#f2f2ee]">
                        {featuredProject.title}
                    </h3>
                    <p className="mb-4.5 mt-3 max-w-130 text-[13px] leading-[1.55] text-[#8a8a86]">
                        {featuredProject.description}
                    </p>
                    <div className="flex flex-wrap gap-1.75">
                        {featuredProject.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-white/14 px-1.75 py-1 font-ui-mono text-[10px] uppercase tracking-[0.1em] leading-tight text-[#b8b8b3]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    {/* </Link> */}
                </div>
            </div>
        </Link>
    );
};

export { ProjectCard, LedgerProjectCard };
