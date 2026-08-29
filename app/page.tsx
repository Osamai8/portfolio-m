import PortfolioNav from '@/components/PortfolioNav';
import { Button } from '@/components/ui/button';

import {
  AboutSection,
  AwardsSection,
  ContactSection,
  EducationSection,
  FooterSection,
  HeroSection,
  ProjectsSection,
  RecommendationsSection,
  StackSection,
  ExperienceSection
} from '@/features/home/sections';


export default function Home() {

  return (
    <div className="min-h-screen overflow-clip">
      <PortfolioNav />
      <main className="mx-auto w-[min(760px,calc(100%-40px))] max-[840px]:w-[min(700px,calc(100%-36px))] max-[620px]:w-[min(100%-32px,520px)]">
        <HeroSection />
        <AboutSection />

        <ProjectsSection /> {/* left */}
        <ExperienceSection />
        <EducationSection />
        <StackSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}