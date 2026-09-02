import { certifications } from '@/assets/data';

import { LinkList } from '../../../components/LinkList';
import { SectionHeading } from '@/components/SectionHeading';

export function CertificationsSection() {
    return (
        <section className="pt-23 scroll-mt-24 max-[620px]:pt-19" id="certifications">
            <SectionHeading title="Certifications" />
            <LinkList entries={certifications} />
        </section>
    );
}
