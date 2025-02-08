'use client';

import React from 'react';
import Carousel from './carousel';
import { EmblaOptionsType } from 'embla-carousel';

const OPTIONS: EmblaOptionsType = {};
// const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
// const SLIDE_COUNT = 4;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const SLIDES = [
  {
    id: 1,
    title: 'Ecometrics',
    description:
      'Web Application for Managing ESG data through Custom Frameworks for Sustainable Investing.',
    link: 'https://github.com/haidara02/ecometrics',
  },
  {
    id: 2,
    title: 'dnspython',
    description:
      'Python app measuring the DNS resolution time for valid DNS resolvers.',
    link: 'https://github.com/haidara02/dnspython',
  },
  {
    id: 3,
    title: 'got',
    description: 'A lightweight version control system inspired by Git.',
    link: 'https://github.com/haidara02/got',
  },
  {
    id: 4,
    title: 'notsed',
    description: 'Basic text processor based on the sed stream editor.',
    link: 'https://github.com/haidara02/notsed',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center p-10 bg-clay-darkBrown"
    >
      <h2 className="text-xl md:text-3xl md:leading-normal font-extrabold text-clay-cream">
        My Projects
      </h2>
      <div className="items-center flex justify-center m-auto p-6 lg:w-3/5">
        <Carousel slides={SLIDES} options={OPTIONS} />
      </div>
    </section>
  );
};

export default ProjectsSection;
