"use client";

import { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';

import { certifications } from '@/assets/data';
import { email } from '@/assets/const';

export function CopyEmail() {
    const [copied, setCopied] = useState(false);

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1700);
        } catch {
            setCopied(false);
        }
    }

    return (
        <button
            className="inline-flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-base text-[#9c9c9c] transition-colors duration-200 hover:text-white"
            type="button"
            onClick={copyEmail}
            aria-label="Copy email address"
        >
            {copied ? <Check size={16} strokeWidth={1.3} /> : <Copy size={16} strokeWidth={1.3} />}
            <span>{copied ? 'Copied!' : email}</span>
        </button>
    );
}

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
