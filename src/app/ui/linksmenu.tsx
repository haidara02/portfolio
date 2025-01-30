'use client';
import React from 'react';
import Link from 'next/link';

interface Link {
  name: string;
  href: string;
  icon: React.ElementType;
}

interface LinksMenuProps {
  links: Link[];
}

const LinksMenu: React.FC<LinksMenuProps> = ({ links }) => {
  return (
    <ul className="flex flex-col gap-2 py-4 items-center justify-center md:hidden">
      {links.map((link) => (
        <li key={link.name} className="w-full px-4">
          <Link
            key={link.name}
            className="font-semibold text-clay-darkGreen hover:text-white flex items-center justify-center rounded-lg border border-clay-darkGreen hover:border-white w-full p-2"
            href={link.href}
          >
            <link.icon className="w-5 h-5 mr-2" />
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LinksMenu;
