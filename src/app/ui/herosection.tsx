'use client';
import Image from 'next/image';
import Link from 'next/link';
import { EnvelopeIcon, DocumentTextIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { TypeAnimation } from 'react-type-animation';

const HeroSection: React.FC = () => {
  const greetings = [
    'Xin Chào!',
    'Hello!',
    'Hola!',
    'Bonjour!',
    'Hallo!',
    'Ciao!',
    'こんにちは!',
    '안녕하세요!',
    '你好!',
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
    <section className="flex flex-col lg:flex-row gap-1 md:gap-5 items-center justify-center px-10 min-h-screen bg-clay-cream">
      <div className="flex flex-col justify-center gap-6 px-6 py-10 md:px-10 text-clay-darkBrown">
        <p
          className="text-3xl md:text-6xl md:leading-normal font-extrabold flex overflow-hidden"
          style={{ whiteSpace: 'nowrap' }}
        >
          <span
            className={clsx(
              `relative transition-all duration-1000 mr-5 ease-in-out overflow-hidden`,
              fade ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
            )}
          >
            {currentGreeting}
          </span>
          <span
            className={clsx(
              `relative transition-all duration-1000 mr-5 ease-in-out overflow-hidden`,
              fade
                ? '-translate-y-[-100%] opacity-0'
                : 'translate-y-0 opacity-100'
            )}
          >
            I'm Khoi.
          </span>
        </p>
        <p className={`text-md md:text-xl md:leading-normal`}>
          I just finished my undergrad at{' '}
          <a
            href="https://www.unsw.edu.au/"
            className="text-clay-green font-semibold"
          >
            UNSW
          </a>{' '}
          studying Computer Science.
        </p>
        <span
          className={`positiom-relative text-md md:text-xl md:leading-normal`}
        >
          <span
            className={`absolute h-px w-px m-[-1px] overflow-hidden p-0 clip-rect-[1px_1px_1px_1px] clip-path-inset-[50%]`}
          >
            {/* The most important content of the typewriter animation: Hidden from sighted viewers but (in most cases) accessible to screen readers */}
            When I'm not coding, I drink coffee, travel, and perhaps dabble in
            gaming
          </span>
          When I'm not coding, I like to{' '}
          <TypeAnimation
            className={`text-md md:text-xl md:leading-normal`}
            sequence={[
              'drink coffee ☕',
              1000,
              'travel ✈️',
              1000,
              'dabble in RPG games 🤓',
              2000,
            ]}
            repeat={Infinity}
            wrapper="span"
          />
        </span>

        <p className={`text-md md:text-xl md:leading-normal`}>
          Hoping to make a positive difference on the world—whether big or
          small— and be there to see it happen 😆
        </p>
        <div className="flex gap-3">
          <Link
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-clay-green px-6 py-3 text-sm w-full sm:w-fit font-medium text-white transition-colors hover:bg-clay-darkGreen md:text-base"
          >
            <span>Contact Me</span> <EnvelopeIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-clay-darkBrown px-6 py-3 text-sm w-full sm:w-fit font-medium text-white transition-colors hover:bg-clay-brown md:text-base"
          >
            <span>Download CV</span>
            <DocumentTextIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>
      <div className="mt-4 lg:mt-0 px-6 py-10 lg:px-10">
        <div className="rounded-full w-[400px] h-[400px] relative overflow-hidden border-[6px] hover:border-dashed border-clay-green">
          <Image
            src="/images/heroimage.jpg"
            alt="hero image"
            className="absolute object-cover w-full h-full"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
