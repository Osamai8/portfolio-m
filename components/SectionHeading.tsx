import { ArrowUpRight } from "lucide-react";

export function SectionHeading({
    title,
    action,
}: {
    title: string;
    action?: string;
}) {
    return (
        <div className="mb-7 flex items-center justify-between gap-5">
            <h2 className="m-0 text-[22px] font-medium leading-[1.15] tracking-[-0.03em] text-[#f2f2ee] max-[620px]:text-xl">
                {title}
            </h2>
            {action ? (
                <a
                    className="inline-flex items-center gap-1.5 text-sm font-ui-mono uppercase tracking-[0.12em] text-[#999] transition-colors duration-200 hover:text-[#f2f2f2]"
                    href="#contact"
                >
                    {action} <ArrowUpRight size={14} strokeWidth={1.4} />
                </a>
            ) : null}
        </div>
    );
}
