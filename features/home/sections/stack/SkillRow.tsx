import { SkillGroup } from "@/assets/type";

const toneClasses = {
    amber: "bg-[#a18b5b]",
    blue: "bg-[#6f8aa3]",
    coral: "bg-[#a87870]",
    green: "bg-[#6d8f78]",
    purple: "bg-[#897ca0]",
    teal: "bg-[#6c9995]",
} as const;

interface SkillRowProps {
    group: SkillGroup;
    index: number;
}

const SkillRow = ({ group, index }: SkillRowProps) => {
    return (
        <div
            className={`grid grid-cols-[150px_minmax(0,1fr)] items-start gap-6 border-t border-white/8 py-4.5 opacity-100 translate-y-0 transition-[opacity,transform] duration-520 ease-out max-[620px]:grid-cols-1 max-[620px]:gap-2 motion-reduce:transform-none motion-reduce:transition-none ${index === 0 ? "border-t-0" : ""}`}
            data-skill-reveal
            key={group.category}
            style={{ transitionDelay: `${(index + 1) * 50}ms` }}
        >
            <div className="flex items-center gap-2 font-ui-mono text-[12px] uppercase tracking-[0.12em] leading-normal text-[#b8b8b3]">
                <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${toneClasses[group.tone]}`}
                    aria-hidden="true"
                />
                <span>{group.category}</span>
            </div>
            <div className="text-[14.5px] leading-[1.8] text-[#6b6b67]">
                {group.skills.map((skill, skillIndex) => (
                    <span key={skill.name} className="whitespace-normal">
                        {skill.emphasized ? (
                            <strong className="font-medium text-[#f2f2ee]">
                                {skill.name}
                            </strong>
                        ) : (
                            <span>{skill.name}</span>
                        )}
                        {skillIndex < group.skills.length - 1 ? (
                            <span className="text-[#45453f]">, </span>
                        ) : null}
                    </span>
                ))}
            </div>
        </div>
    );
};

export { SkillRow };
