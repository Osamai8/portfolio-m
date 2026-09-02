import { LINKS } from '@/assets/const'
import { CopyEmail } from '@/components/CopyEmail'
import React from 'react'

const HeroFooter = () => {
    return (
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
    )
}

export { HeroFooter };