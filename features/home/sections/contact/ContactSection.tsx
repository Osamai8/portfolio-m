import { SectionHeading } from '@/components/SectionHeading';
import ContactForm from './ContactForm';
import { AsideDetails } from './AsideDetails';

const ContactSection = () => {
    return (
        <section className="pb-20 pt-23 scroll-mt-24 max-[620px]:pt-19" id="contact">
            <SectionHeading title="Let's talk" />
            <div className="grid grid-cols-[0.75fr_1fr] gap-8.5 max-[620px]:grid-cols-1">
                <AsideDetails />
                <ContactForm />
            </div>
        </section>
    );
}
export { ContactSection };