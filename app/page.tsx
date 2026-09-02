import { Footer } from '@/components/Footer';
import PortfolioNav from '@/components/PortfolioNav';

import {
  AboutSection,
  ContactSection,
  EducationSection,
  HeroSection,
  ProjectsSection,
  ExperienceSection,
  StackSection
} from '@/features/home/sections';


export default function Home() {

  return (
    <div className="min-h-screen overflow-clip">
      <PortfolioNav />
      <main className="main">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <StackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}