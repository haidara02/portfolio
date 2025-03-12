"use client";
import Navbar from "@/app/ui/navbar";
import HeroSection from "@/app/ui/herosection";
import AboutSection from "@/app/ui/aboutsection";
import ProjectsSection from "./ui/projectssection";
import ContactSection from "./ui/contactsection";
import FooterSection from "./ui/footersection";

export default function Home() {
  return (
    <main className="flex flex-col bg-clay-darkBrown overflow-hidden">
      <Navbar />
      <div className="fixed top-0 left-0 w-full h-screen z-0 bg-clay-cream justify-center align-center">
        <HeroSection />
      </div>
      <div className="h-[100px] relative overflow-hidden z-10 mt-[100vh] md:mt-[85vh] flex w-full">
        <div className="h-[100px] bg-clay-darkBrown watermask"></div>
      </div>
      <div className="z-10 -mt-[2]">
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </main>
  );
}
