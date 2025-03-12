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
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <HeroSection />
      </div>
      <div className="relative z-10 mt-[85vh]">
        <div className="h-[100px] relative overflow-hidden">
          <div className="h-[100px] bg-clay-darkBrown watermask"></div>
        </div>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </main>
  );
}
