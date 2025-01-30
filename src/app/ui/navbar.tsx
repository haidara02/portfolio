'use client';
import {
  ArchiveBoxIcon,
  UserIcon,
  EnvelopeIcon,
  Bars4Icon,
  XMarkIcon,
  HomeIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import LinksMenu from './linksmenu';

const links = [
  { name: 'About', href: '#about', icon: UserIcon },
  {
    name: 'Projects',
    href: '#projects',
    icon: ArchiveBoxIcon,
  },
  { name: 'Contact', href: '#contact', icon: EnvelopeIcon },
];

// Standard navigation bar with mobile responsiveness.
const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevYCoord, setPrevYCoord] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentYCoord = window.scrollY;
      if (currentYCoord > prevYCoord && currentYCoord > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setPrevYCoord(currentYCoord);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevYCoord]);

  return (
    <nav
      className={clsx(
        'bg-clay-green bg-opacity-90 shadow-md fixed top-0 left-0 right-0 z-10 transition-transform duration-500',
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <div className="flex justify-between items-center h-20 mx-auto px-4 sm:px-6 lg:px-20 lg:py-5">
        {/* Logo */}
        <Link href="/">
          <HomeIcon className="w-8 h-8" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-white border border-clay-darkGreen rounded-full p-4 mx-auto">
          {links.map((link) => (
            <Link
              key={link.name}
              className="font-semibold hover:text-clay-darkGreen flex items-center"
              href={link.href}
            >
              <link.icon className="w-5 h-5 mr-2" />
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Links */}
        <div className="mobile-menu md:hidden" aria-label="Toggle Menu">
          {!mobileOpen ? (
            <button
              onClick={() => setMobileOpen(true)}
              className="flex item-center px-3 py-2 rounded text-clay-darkGreen hover:text-white"
            >
              <Bars4Icon className="h-10 w-10" />
            </button>
          ) : (
            <button
              onClick={() => setMobileOpen(false)}
              className="flex item-center px-3 py-2 rounded  text-clay-darkGreen hover:text-white"
            >
              <XMarkIcon className="h-10 w-10" />
            </button>
          )}
        </div>
      </div>
      {mobileOpen ? <LinksMenu links={links} /> : null}
    </nav>
  );
};

export default Navbar;
