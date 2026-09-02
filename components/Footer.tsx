import { LINKS } from "@/assets/const";

const Footer = () => {
    return (
        <footer className="mx-auto flex w-[min(760px,calc(100%-40px))] justify-between gap-6 border-t border-[#303030] pb-4.5 pt-3.25 text-sm text-[#8f8f8f] max-[840px]:w-[min(700px,calc(100%-36px))] max-[620px]:w-[min(100%-32px,520px)] max-[620px]:flex-col max-[620px]:gap-2">
            <p>
                Designed By <a className="hover:underline" href={LINKS.templateOwner} target="_blank"><strong>Thaer</strong></a>
            </p>
            <p>© Copyright 2024</p>
        </footer>
    );
}
export { Footer };