import { experience } from '@/assets/data';

import { Timeline } from '../../../components/Timeline';
import { SectionHeading } from '@/components/SectionHeading';

const ExperienceSection = () => {
    return (
        <section className="pt-23 scroll-mt-24 max-[620px]:pt-19" id="experience">
            <SectionHeading title="Experience" />
            <Timeline entries={experience} />
        </section>
    );
}

export { ExperienceSection };
