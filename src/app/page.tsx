'use client';
import clsx from 'clsx';
import Navbar from '@/app/ui/navbar';
import HeroSection from '@/app/ui/herosection';
import AboutSection from '@/app/ui/aboutsection';
import ProjectsSection from './ui/projectssection';
import ContactSection from './ui/contactsection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
