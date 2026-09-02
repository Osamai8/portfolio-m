"use client";

import { useEffect, useRef } from "react";
import { skills } from "@/assets/data";
import { SkillRow } from "./SkillRow";

const StackSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const revealItems = Array.from(
            section.querySelectorAll<HTMLElement>("[data-skill-reveal]"),
        );
        const hide = () => {
            revealItems.forEach((item) => {
                item.classList.remove("opacity-100", "translate-y-0");
                item.classList.add("opacity-0", "-translate-y-[6px]");
            });
        };
        const reveal = () => {
            revealItems.forEach((item) => {
                item.classList.remove("opacity-0", "-translate-y-[6px]");
                item.classList.add("opacity-100", "translate-y-0");
            });
        };
        const isVisible = () => {
            const bounds = section.getBoundingClientRect();
            return bounds.top < window.innerHeight * 0.92 && bounds.bottom > 0;
        };

        const prefersReducedMotion =
            typeof window.matchMedia === "function" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        hide();

        if (prefersReducedMotion || !("IntersectionObserver" in window)) {
            reveal();
            return;
        }

        let hasRevealed = false;
        const revealIfVisible = () => {
            if (hasRevealed || !isVisible()) return;
            hasRevealed = true;
            reveal();
            observer.disconnect();
            window.removeEventListener("scroll", revealIfVisible);
            window.removeEventListener("resize", revealIfVisible);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) revealIfVisible();
            },
            { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
        );

        observer.observe(section);
        window.addEventListener("scroll", revealIfVisible, { passive: true });
        window.addEventListener("resize", revealIfVisible);
        window.requestAnimationFrame(revealIfVisible);

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", revealIfVisible);
            window.removeEventListener("resize", revealIfVisible);
        };
    }, []);

    return (
        <div className="text-[#f2f2ee]" ref={sectionRef}>
            <div
                className="mb-5 translate-y-0 opacity-100 transition-[opacity,transform] duration-520 ease-out motion-reduce:transform-none motion-reduce:transition-none"
                data-skill-reveal
            >
                <h2 className="m-0 text-[22px] font-medium leading-[1.15] tracking-[-0.03em] text-[#f2f2ee]">
                    Stack
                </h2>
            </div>
            <div className="border-t border-white/8">
                {skills.map((group, index) => <SkillRow
                    key={group.category}
                    group={group}
                    index={index}
                />
                )}
            </div>
        </div>
    );
};

export { StackSection };
