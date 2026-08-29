import { SectionHeading } from "@/components/SectionHeading";

const AboutSection = () => {
    return (
        <section className="pt-23 scroll-mt-24 max-[620px]:pt-19" id="about">
            <SectionHeading title="About me" />
            <div className="text-base leading-[1.6] text-[#a3a3a3]">
                <p>
                    Hello, I’m Osama — a Full-Stack Developer with 4 years of experience crafting modern web platforms. My main stack includes React, Next.js, TypeScript, and Node.js, and I’ve built everything from real-time learning tools and data-heavy dashboards to multi-tenant SaaS systems.
                </p>
                <p>
                    I like being involved beyond the UI: shaping architecture, building APIs, working with data, and collaborating with teams to turn ideas into products people can actually use.
                </p>
            </div>
        </section>
    );
}
export { AboutSection };