// import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import TechIcons from './TechIcons';

const MDXComponents = {
  Image,
  Head,
  a: ({ href, children }: { href: string; children: string }) => (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  ),
  TechIcons,
};

export default MDXComponents;
