import { awards } from '@/assets/data';

import { LinkList } from './shared';
import { SectionHeading } from '@/components/SectionHeading';

export function AwardsSection() {
    return (
        <section className="pt-23 scroll-mt-24 max-[620px]:pt-19" id="awards">
            <SectionHeading title="Awards" />
            <LinkList entries={awards} />
        </section>
    );
}
