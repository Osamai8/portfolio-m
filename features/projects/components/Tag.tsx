import type { ProjectDetail } from "@/assets/project/type";

interface TagsProps {
    tags: ProjectDetail["tags"];
}
const Tags = ({ tags }: TagsProps) => {
    return tags.map((tag) => (
        <span
            key={tag}
            className="rounded-[3px] bg-white/5 px-1.75 py-0.75 font-ui-mono text-[10px] uppercase tracking-[0.1em] leading-tight text-[#8a8a86]"
        >
            {tag}
        </span>
    ));
};

export { Tags };
