import { experience } from "@/assets/data";
import { MapPin } from "lucide-react";

export function Timeline({ entries }: { entries: typeof experience }) {
    return (
        <div className="border-l border-[#303030]">
            {entries.map((entry) => (
                <article className="pb-11 pl-4.25 last:pb-0" key={`${entry.title}-${entry.dates}`}>
                    <div className="flex items-start justify-between gap-6 max-[620px]:flex-col max-[620px]:gap-3">
                        <div>
                            <p className="mb-2 flex items-center gap-1 text-[15px] text-[#999]">
                                <MapPin size={14} strokeWidth={1.2} /> {entry.location}
                            </p>
                            <h3 className="m-0 text-[17px] font-medium leading-[1.22] tracking-[-0.015em]">{entry.title}</h3>
                            <p className="m-0 mt-2 text-sm text-[#979797]">{entry.subtitle}</p>
                        </div>
                        <p className="m-0 mt-2 shrink-0 text-right text-base text-[#979797] max-[620px]:text-left">{entry.dates}</p>
                    </div>
                    <ul className="mb-0 mt-7.75 pl-4.75 text-base leading-[1.52] text-[#a8a8a8] max-[620px]:mt-6">
                        {entry.body.map((point) => (
                            <li className="mb-1.5 pl-1" key={point}>
                                {point}
                            </li>
                        ))}
                    </ul>
                </article>
            ))}
        </div>
    );
}