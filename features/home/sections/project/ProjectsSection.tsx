import Image from "next/image";

import { SectionHeading } from "@/components/SectionHeading";
import { LedgerProjectCard, ProjectCard } from "./ProjectCard";
import { projects } from "@/assets/project/data";

export function ProjectsSection() {
  return (
    <section className="pt-23 scroll-mt-24 max-[620px]:pt-19" id="work">
      <SectionHeading title="Some of my works" />
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4 max-[620px]:grid-cols-1 max-[620px]:gap-3.25">
          {projects.map((project) => <ProjectCard project={project} key={project.id} />)}
        </div>

        <article >
          <LedgerProjectCard />
        </article>

      </div >
    </section >
  );
}