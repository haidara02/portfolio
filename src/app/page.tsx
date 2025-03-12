"use client";
import Navbar from "@/app/ui/navbar";
import HeroSection from "@/app/ui/herosection";
import AboutSection from "@/app/ui/aboutsection";
import ProjectsSection from "./ui/projectssection";
import ContactSection from "./ui/contactsection";
import FooterSection from "./ui/footersection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="relative z-0">
        <HeroSection />
      </div>

      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
