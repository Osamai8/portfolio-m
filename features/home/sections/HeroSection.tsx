import { ArrowDownToLine } from 'lucide-react';
import Image from 'next/image';
import { profileImage } from '@/assets/images';
import { CopyEmail } from './shared';
import { LINKS } from '@/assets/const';

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
                            <span className="flex items-center">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-3.5 w-3.5">
                                    <path d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z" />
                                    <circle cx="12" cy="10" r="2.5" />
                                </svg>
                            </span>
                            Bareilly, UP, IN
                        </p>
                        <p className="mt-5.5 flex items-center gap-1.5 text-sm text-[#9b9b9b]">
                            <span className="h-1.75 w-1.75 rounded-full bg-[#27e660] shadow-[0_0_0_3px_rgba(39,230,96,0.06)]" />
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
                        <ArrowDownToLine size={16} strokeWidth={1.2} /> Download CV
                    </a>
                </div>
            </div>
            <div className="flex items-center justify-between border-t border-[#303030] pt-3.25 max-[620px]:flex-col max-[620px]:items-start max-[620px]:gap-3.5">
                <CopyEmail />
                <div className="flex items-center gap-5.25">
                    <a className="inline-flex items-center gap-1.5 text-base text-[#9c9c9c] transition-colors duration-200 hover:text-white" href={LINKS.github}>
                        Github
                    </a>
                    <a className="inline-flex items-center gap-1.5 text-base text-[#9c9c9c] transition-colors duration-200 hover:text-white" href={LINKS.linkedin}>
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}

export { HeroSection }
