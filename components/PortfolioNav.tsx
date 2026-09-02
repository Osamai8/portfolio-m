"use client";

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

  return (
    <header className="pointer-events-none sticky top-4 z-10 flex w-full justify-center px-4 max-[620px]:top-2.5">
      <nav
        className={`pointer-events-auto flex min-h-12 items-center rounded-[9px] border border-white/5 bg-[#262626]/87 p-[6px_9px] shadow-[0_12px_32px_rgba(0, 0, 0, .25)] backdrop-blur-xl transition-all duration-200 max-[620px]:w-[calc(100vw - 22px)] max-[620px]:flex-wrap max-[620px]:justify-between max-[620px]:px-1.75 max-[620px]:gap-1.75 `}
        aria-label="Portfolio sections"
      >
        <div className="flex items-center gap-4.25 max-[840px]:gap-2.75">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id} `}
              className="font-ui-mono text-[11px] uppercase tracking-[0.12em] leading-none text-[#b9b9b9] transition-colors duration-200 hover:text-white max-[840px]:text-[10px]"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

