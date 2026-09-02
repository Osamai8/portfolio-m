"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Intro", "intro"],
  ["About", "about"],
  ["Work", "work"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Stack", "stack"],
  ["Contact", "contact"],
] as const;

export default function PortfolioNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none sticky top-4 z-10 flex w-full justify-center px-4 max-[620px]:top-2.5">
      <nav
        className={`pointer-events-auto flex min-h-12 items-center gap-3 rounded-[9px] border border-white/5 bg-[#262626]/87 p-[6px_9px] shadow-[0_12px_32px_rgba(0,0,0,.25)] backdrop-blur-xl max-[620px]:w-[calc(100vw-22px)] max-[620px]:justify-between max-[620px]:px-1.75 ${open ? "max-[620px]:flex-wrap max-[620px]:justify-center max-[620px]:gap-1.75" : ""}`}
        aria-label="Portfolio sections"
      >
        <div className="flex items-center gap-4.25 max-[840px]:gap-2.75 max-[620px]:gap-0">
          {links.slice(0, 4).map(([label, id]) => (
            <a
              className="font-ui-mono text-[11px] uppercase tracking-[0.12em] leading-none text-[#b9b9b9] transition-colors duration-200 hover:text-white max-[840px]:text-[10px] max-[620px]:hidden"
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
        <button
          className="grid h-8.5 w-8.5 place-items-center rounded-md border border-white/5 bg-[#1a1a1a] p-0 text-[#aaa] transition duration-200 ease-out hover:bg-[#242424] hover:text-white active:scale-[.96]"
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? (
            <X size={17} strokeWidth={1.5} />
          ) : (
            <Menu size={17} strokeWidth={1.5} />
          )}
        </button>
        <div
          className={`flex items-center gap-4.25 max-[840px]:gap-3.75 max-[620px]:gap-0 ${open ? "max-[620px]:order-3 max-[620px]:w-full max-[620px]:flex-wrap max-[620px]:justify-center max-[620px]:gap-3 max-[620px]:px-1 max-[620px]:pb-1 max-[620px]:pt-2" : ""}`}
        >
          {links.slice(4).map(([label, id]) => (
            <a
              className={`font-ui-mono text-[11px] uppercase tracking-[0.12em] leading-none text-[#b9b9b9] transition-colors duration-200 hover:text-white max-[840px]:text-[10px] ${open ? "max-[620px]:inline max-[620px]:text-[11px]" : "max-[620px]:hidden"}`}
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
