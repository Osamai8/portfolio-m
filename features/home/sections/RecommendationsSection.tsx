import { recommendations } from '@/assets/data';
import { SectionHeading } from '@/components/SectionHeading';


export function RecommendationsSection() {
    return (
        <section className="pt-23 scroll-mt-24 max-[620px]:pt-19" id="recommendations">
            <SectionHeading title="Recommendations" />
            <div className="flex flex-col gap-9.5 border-l border-[#303030]">
                {recommendations.map((item) => (
                    <article className="pl-4.25" key={item.name}>
                        <h3 className="m-0 text-[17px] font-medium leading-[1.22] tracking-[-0.015em]">{item.name}</h3>
                        <p className="m-0 mt-1.5 text-base text-[#979797]">{item.role}</p>
                        <blockquote className="m-0 mt-7.75 text-base leading-normal text-[#a8a8a8]">“{item.quote}”</blockquote>
                    </article>
                ))}
            </div>
        </section>
    );
}
