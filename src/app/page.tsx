'use client';
import clsx from 'clsx';
import Navbar from '@/app/ui/navbar';
import HeroSection from '@/app/ui/herosection';
import AboutSection from '@/app/ui/aboutsection';
import ProjectsSection from './ui/projectssection';
import ContactSection from './ui/contactsection';
import FooterSection from './ui/footersection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <div className="h-[100px] bg-clay-cream relative">
        <div className="h-[100px] bg-clay-darkBrown watermask"></div>
      </div>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
