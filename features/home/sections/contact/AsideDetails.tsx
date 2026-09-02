import { phoneNumber, LINKS } from '@/assets/const'
import { CopyEmail } from '@/components/CopyEmail'
import { Phone } from 'lucide-react'

const AsideDetails = () => {
    return (
        <aside className="flex flex-col gap-7.5 border-l border-[#303030] pl-4.25 max-[620px]:pl-3.5">
            <div>
                <h3 className="mb-3 mt-0 text-[17px] font-medium">Email:</h3>
                <CopyEmail />
            </div>
            <div>
                <h3 className="mb-3 mt-0 text-[17px] font-medium">Phone:</h3>
                <a className="inline-flex items-center gap-2 text-base text-[#9c9c9c] transition-colors duration-200 hover:text-white" href="tel:+11234567890">
                    <Phone size={16} strokeWidth={1.2} /> {phoneNumber}
                </a>
            </div>
            <div>
                <h3 className="mb-3 mt-0 text-[17px] font-medium">Socials:</h3>
                <div className="flex flex-col items-start gap-3.5">
                    <a className="inline-flex items-center gap-2 text-base text-[#9c9c9c] hover:text-white"
                        target='_blank'
                        href={LINKS.instagram}
                    >
                        Instagram
                    </a>
                    <a className="inline-flex items-center gap-2 text-base text-[#9c9c9c] hover:text-white"
                        target='_blank'
                        href={LINKS.linkedin}>
                        LinkedIn
                    </a>
                    <a className="inline-flex items-center gap-2 text-base text-[#9c9c9c] hover:text-white"
                        target='_blank'
                        href={LINKS.github}
                    >
                        Github
                    </a>
                </div>
            </div>
        </aside>
    )
}

export { AsideDetails }