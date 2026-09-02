
import { ArrowUpRight } from 'lucide-react';

import { certifications } from '@/assets/data';

export function LinkList({ entries }: { entries: typeof certifications }) {
    return (
        <div className="flex flex-col gap-7.5">
            {entries.map((entry) => (
                <div className="flex items-start justify-between gap-6" key={`${entry.title}-${entry.meta}`}>
                    <div>
                        <h3 className="m-0 text-[17px] font-medium leading-[1.22] tracking-[-0.015em]">{entry.title}</h3>
                        <p className="m-0 mt-2 text-base text-[#979797]">{entry.meta}</p>
                    </div>
                    <a
                        className="inline-flex shrink-0 items-center gap-1.5 border-b border-[#464646] pb-1 text-sm text-[#c8c8c8] transition-colors duration-200 hover:text-[#f2f2f2]"
                        href={entry.href}
                    >
                        {entry.action} <ArrowUpRight size={14} strokeWidth={1.4} />
                    </a>
                </div>
            ))}
        </div>
    );
}
