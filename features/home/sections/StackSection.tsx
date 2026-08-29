import { ArrowUpRight } from 'lucide-react';

import { stack } from '@/assets/data';
import { SectionHeading } from '@/components/SectionHeading';


export function StackSection() {
    return (
        <section className="pt-23 scroll-mt-24 max-[620px]:pt-19" id="stack">
            <SectionHeading title="Stack" />
            <div className="grid grid-cols-2 gap-x-10.5 gap-y-5.75 max-[620px]:grid-cols-1">
                {stack.map((item) => (
                    <a className="flex min-w-0 items-center gap-3.25" href="#contact" key={item.title}>
                        <span
                            className={`grid h-12.5 w-12.5 shrink-0 place-items-center rounded-[7px] border border-[#303030] bg-[#171717] text-[22px] font-semibold ${item.tone === 'blue'
                                ? 'text-[#37b9ff]'
                                : item.tone === 'orange'
                                    ? 'text-[#f08a2b]'
                                    : item.tone === 'green'
                                        ? 'text-[#2bdf9d]'
                                        : item.tone === 'violet'
                                            ? 'text-[#8f4cff]'
                                            : item.tone === 'cobalt'
                                                ? 'text-[#1689ff]'
                                                : 'text-[#c8995b]'
                                }`}
                        >
                            {item.glyph}
                        </span>
                        <span>
                            <strong className="mb-0.5 flex items-center gap-1 text-[17px] font-medium">
                                {item.title} <ArrowUpRight size={13} strokeWidth={1.2} />
                            </strong>
                            <small className="block text-[15px] text-[#939393]">{item.description}</small>
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
}
