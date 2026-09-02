"use client";

import { useState } from 'react';
import { userEmail } from "@/assets/const";
import { Check, Copy } from "lucide-react";

export function CopyEmail() {
    const [copied, setCopied] = useState(false);

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(userEmail);
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
            <span>{copied ? 'Copied!' : userEmail} </span>
        </button >
    );
}