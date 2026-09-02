import { education } from '@/assets/data';

import { Timeline } from '@/components/Timeline';
import { SectionHeading } from '@/components/SectionHeading';

export function EducationSection() {
    return (
        <section className="pt-23 scroll-mt-24 max-[620px]:pt-19" id="education">
            <SectionHeading title="Education" />
            <Timeline entries={education} />
        </section>
    );
}
