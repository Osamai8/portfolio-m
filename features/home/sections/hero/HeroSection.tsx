import { LucideArrowDownToLine, LucideMapPin } from 'lucide-react';
import Image from 'next/image';
import { profileImage } from '@/assets/images';
import { LINKS } from '@/assets/const';
import { HeroFooter } from './HeroFooter';

const HeroSection = () => {
    return (
        <section className="pt-23 scroll-mt-24 max-[620px]:pt-19" id="intro">
            <div className="flex items-start justify-between gap-7 pb-7.25 max-[840px]:gap-5 max-[620px]:flex-col">
                <div className="flex items-start gap-4.5">
                    <div className="overflow-hidden rounded-lg bg-[#1b1b1b] max-[620px]:h-23.5 max-[620px]:w-23.5">
                        <Image
                            className="block h-30.5 w-30.5 scale-105 object-cover object-center max-[620px]:h-23.5 max-[620px]:w-23.5"
                            src={profileImage}
                            alt="Osama Islam"
                            height={122}
                            width={122}
                        />
                    </div>
                    <div>
                        <h1 className="m-0 mt-0.5 text-[29px] font-semibold leading-[1.08] tracking-[-0.045em] max-[620px]:text-[26px]">
                            Osama Islam
                        </h1>
                        <p className="my-1.25 mb-1.75 text-lg leading-[1.1] text-[#a0a0a0] max-[620px]:text-[17px]">Fullstack Developer</p>
                        <p className="my-1.5 flex items-center gap-1 text-sm text-[#9b9b9b]">
                            <LucideMapPin className='h-4 w-4' />
                            Bareilly, UP, IN
                        </p>
                        <p className="mt-5.5 flex items-center gap-1.5 text-sm text-[#9b9b9b]">
                            <span className="h-1.75 w-1.75 rounded-full bg-primary animate-pulse" />
                            Available for work
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-3.5 pt-6.5 max-[620px]:flex-row max-[620px]:flex-wrap max-[620px]:pt-0">
                    <a
                        className="inline-flex w-max items-center gap-1.5 border-b border-[#5c5c5c] pb-1 text-base text-[#e8e8e8] transition-colors duration-200 hover:border-white hover:text-white"
                        href={LINKS.resume}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <LucideArrowDownToLine size={16} strokeWidth={1.2} /> Download CV
                    </a>
                </div>
            </div>
            <HeroFooter />
        </section>
    );
}

export { HeroSection }
