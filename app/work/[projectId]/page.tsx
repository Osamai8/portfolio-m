import Link from "next/link";
import { notFound } from "next/navigation";
import { projectDetails } from "@/assets/project/data";
import type { ProjectNameEnum } from "@/assets/project/type";
import { Tags } from "@/features/projects/components/Tag";

interface ProjectPageParams {
    params: Promise<{
        projectId: ProjectNameEnum;
    }>;
}

const ProjectPage = async ({ params }: ProjectPageParams) => {
    const { projectId } = await params;
    const project = projectDetails[projectId];

    if (!projectDetails[projectId]) {
        notFound();
    }

    return (
        <main className="main py-32">
            <div className="w-full max-w-160">
                <Link
                    href="/#work"
                    className="mb-10 inline-block font-ui-mono text-[11px] uppercase tracking-[0.14em] text-[#6b6b67] transition-colors hover:text-[#f2f2ee]"
                >
                    ← all projects
                </Link>

                <div className="mb-2 flex items-center gap-2.5">
                    <Tags tags={project.tags} />
                </div>

                <h1 className="mb-2 text-[26px] font-medium leading-tight tracking-[-0.03em] text-[#f2f2ee]">
                    {project.title}
                </h1>

                <p className="mb-8 text-[14.5px] text-[#8a8a86]">{project.subtitle}</p>

                {project.isConfidential ? (
                    <div className="mb-4 rounded-lg border border-white/6 bg-[#191919] px-4.5 py-4 text-[13px] leading-[1.6] text-[#8a8a86]">
                        <span className="mr-1.5 font-ui-mono text-[11px] uppercase tracking-[0.12em] text-[#c9713f]">
                            note
                        </span>
                        Client confidentiality means I can't share live screenshots or a
                        public link for this one — here's what the project involved and what
                        I built.
                    </div>
                ) : null}

                <div className="mb-10 grid grid-cols-3 gap-3">
                    {project.stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-lg border border-white/6 bg-[#191919] p-4"
                        >
                            <div className="font-ui-mono text-[22px] font-medium leading-none tracking-[-0.04em] text-[#f2f2ee]">
                                {stat.value}
                            </div>
                            <div className="mt-1 text-[11.5px] leading-tight text-[#6b6b67]">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                <section className="mb-9">
                    <h2 className="mb-3 font-ui-mono text-[11px] font-normal uppercase tracking-[0.14em] text-[#6b6b67]">
                        the problem
                    </h2>
                    <p className="text-[14.5px] leading-[1.75] text-[#b8b8b3]">
                        {project.problem}
                    </p>
                </section>

                <section className="mb-9">
                    <h2 className="mb-3 font-ui-mono text-[11px] font-normal uppercase tracking-[0.14em] text-[#6b6b67]">
                        what i built
                    </h2>
                    <ul className="space-y-1.5">
                        {project.deliverables.map((item) => (
                            <li
                                key={item}
                                className="relative pl-4 text-[14.5px] leading-[1.75] text-[#b8b8b3]"
                            >
                                <span className="absolute left-0 text-[#45453f]">—</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2 className="mb-3 font-ui-mono text-[11px] font-normal uppercase tracking-[0.14em] text-[#6b6b67]">
                        tech stack
                    </h2>
                    <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((item) => (
                            <span
                                key={item}
                                className="rounded-md border border-white/8 px-2.25 py-1 font-ui-mono text-[10px] uppercase tracking-[0.1em] text-[#8a8a86]"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ProjectPage;
