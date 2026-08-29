import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import { projects } from '@/assets/data';
import { SectionHeading } from '@/components/SectionHeading';


export function ProjectsSection() {
    return (
        <section className="pt-23 scroll-mt-24 max-[620px]:pt-19" id="work">
            <SectionHeading title="Some of my projects" action="View all" />
            <div className="grid grid-cols-2 gap-4 max-[620px]:grid-cols-1 max-[620px]:gap-3.25">
                {projects.map((project) => (
                    <a
                        className="block overflow-hidden rounded-lg border border-[#343434] bg-[#151515] transition duration-200 ease-out hover:-translate-y-0.75 hover:border-[#585858] hover:bg-[#191919]"
                        href={project.href}
                        key={project.title}
                    >
                        <div className="aspect-[1.42] overflow-hidden border-b border-[#343434] bg-[#202020] [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:transition-transform [&_img]:duration-300 hover:[&_img]:scale-[1.025]">
                            <Image src={project.image} width={300} height={300} alt={`${project.title} project preview`} />
                        </div>
                        <div className="flex items-center justify-between gap-4 p-[14px_16px_16px]">
                            <div>
                                <h3 className="m-0 mb-1 text-[19px] font-medium tracking-[-0.02em]">{project.title}</h3>
                                <p className="m-0 text-base text-[#8c8c8c]">{project.category}</p>
                            </div>
                            <ArrowUpRight className="text-[#a9a9a9]" size={20} strokeWidth={1.2} />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
