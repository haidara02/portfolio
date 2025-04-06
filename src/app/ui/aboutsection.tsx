"use client";

import React from "react";
import Image from "next/image";
import TechStack from "./techstack";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section id="about">
      <div className="flex flex-col lg:flex-row items-center justify-center p-10 text-clay-cream  bg-clay-darkBrown border-none">
        <div className="flex flex-col max-w-[800px] gap-6 px-6 py-10 md:px-20">
          <h2 className="text-xl md:text-3xl md:leading-normal font-extrabold">
            About Me
          </h2>
          <p className="text-md md:text-xl md:leading-normal">
            Hi! My name is Khoi Nguyen, an aspiring (software) bug swatter
            passionate about team-based projects, from web apps to database
            management.
          </p>
          <p className="text-md md:text-xl md:leading-normal">
            As a recent CS grad with a strong foundation in core algorithms and
            versatile tech stacks, I’m eager to grow as a developer through
            meaningful connections and innovative opportunities.
          </p>
          {/* <p className="text-md md:text-xl md:leading-normal">
          On a personal note, I figured pictures would tell my story best—one is
          worth a thousand words after all. Check out the carousel to what I've
          been up to, and explore my projects in the next section. Feel free to
          reach out if you want to connect!
        </p> */}
        </div>
        <div className="mt-4 lg:mt-0 px-6 py-10 lg:px-10 flex flex-col items-center justify-center gap-5">
          <motion.div
            initial={{ rotate: "0deg" }}
            animate={{ rotate: "360deg" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="rounded-full w-[20rem] h-[20rem] relative overflow-hidden border-[6px] hover:border-dashed border-clay-green"
          >
            <Image
              src="/images/dvd.png"
              alt="hero image"
              className="absolute object-cover w-full h-full"
              width={300}
              height={300}
            />
          </motion.div>
          <h2 className="text-xl md:leading-normal font-extrabold">
            My Tech Stack
          </h2>
          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
