"use client";
import { useEffect } from "react";
import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";
import {
  faJs,
  faPython,
  faJava,
  faNodeJs,
  faReact,
  faHtml5,
  faCss3Alt,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const techIcons = [
  faJs,
  faPython,
  faJava,
  faNodeJs,
  faReact,
  faHtml5,
  faCss3Alt,
  faGitAlt,
  "/cplusplus.svg",
];

const TechStack: React.FC = () => {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    const finalPos = -width / 2 - 8;

    const controls = animate(xTranslation, [0, finalPos], {
      ease: "linear",
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [width, xTranslation]);
  return (
    <section className="relative overflow-hidden bg-clay-deepBrown py-4 rounded-full max-w-[400px] w-[80%]">
      {/* Left vignette */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-clay-deepBrown to-transparent z-10" />

      <motion.div
        className="flex gap-4 w-max"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...techIcons, ...techIcons].map((icon, index) => {
          return typeof icon === "string" ? (
            <Image
              key={index}
              src={icon}
              alt="C++"
              width={40}
              height={40}
              className="fill-clay-cream transition delay-150 duration-300 ease-in-out hover:scale-110"
            />
          ) : (
            <FontAwesomeIcon
              key={index}
              icon={icon}
              className="text-clay-cream text-4xl transition delay-150 duration-300 ease-in-out hover:scale-110"
            />
          );
        })}
      </motion.div>

      {/* Right vignette */}
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-clay-deepBrown to-transparent z-10" />
    </section>
  );
};

export default TechStack;
