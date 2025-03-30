"use client";
import Link from "next/link";
import { EnvelopeIcon, DocumentTextIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Cards from "./cards";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const greetings = [
    "Xin Chào!",
    "Hello!",
    "Hola!",
    "Bonjour!",
    "Hallo!",
    "Ciao!",
    "こんにちは!",
    "안녕하세요!",
    "你好!",
  ];
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentGreeting((prev) => {
          const currentIndex = greetings.indexOf(prev);
          const nextIndex = (currentIndex + 1) % greetings.length;
          return greetings[nextIndex];
        });
        setFade(false);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="flex flex-col lg:flex-row gap-1 md:gap-5 items-center justify-center px-10 py-[80px] min-h-[100vh] md:min-h-[90vh] bg-clay-cream text-clay-darkBrown">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className="flex flex-col justify-center gap-6 px-6 pt-5 md:px-10"
      >
        <p className="font-extrabold flex overflow-hidden text-clamp flex-col md:flex-row">
          <motion.span
            key={currentGreeting} // Helps Framer Motion detect changes
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: fade ? "-100%" : "0%", opacity: fade ? 0 : 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="mr-5 overflow-hidden"
            style={{ whiteSpace: "nowrap" }}
          >
            {currentGreeting}
          </motion.span>
          <motion.span
            className="overflow-hidden"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: fade ? "100%" : "0%", opacity: fade ? 0 : 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ whiteSpace: "nowrap" }}
          >
            I&apos;m Khoi.
          </motion.span>
        </p>
        <p className={`text-sm md:text-xl md:leading-normal`}>
          I just finished my undergrad at{" "}
          <a
            href="https://www.unsw.edu.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-clay-green font-semibold"
          >
            UNSW
          </a>{" "}
          studying Computer Science.
        </p>
        <span
          className={`relative text-sm md:text-xl md:leading-normal min-h-10`}
        >
          <span
            className={`absolute h-px w-px m-[-1px] overflow-hidden p-0 clip-rect-[1px_1px_1px_1px] clip-path-inset-[50%]`}
          >
            When I&apos;m not coding, I drink coffee, travel, and perhaps dabble
            in gaming
          </span>
          When I&apos;m not coding, I like to{" "}
          <TypeAnimation
            sequence={[
              "drink coffee ☕",
              1000,
              "travel ✈️",
              1000,
              "dabble in RPG games 🤓",
              2000,
            ]}
            repeat={Infinity}
            wrapper="span"
          />
        </span>

        <p className={`text-sm md:text-xl md:leading-normal`}>
          Hoping to make a positive difference on the world—whether big or
          small— and be there to see it happen 😆
        </p>
        <div className="flex gap-3">
          <Link
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-clay-green px-6 py-3 text-sm w-full sm:w-fit font-medium text-white transition-colors hover:bg-clay-darkGreen md:text-base"
          >
            <span>Contact </span> <span>Me</span>{" "}
            <EnvelopeIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="https://drive.google.com/file/d/1D9IlVR_hdvUmp_Z_ADEe4_rno0P3Mr-8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-clay-darkBrown px-6 py-3 text-sm w-full sm:w-fit font-medium text-white transition-colors hover:bg-clay-brown md:text-base"
          >
            <span>Download</span> <span> CV</span>
            <DocumentTextIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        <Cards />
      </motion.div>
    </section>
  );
};

export default HeroSection;
