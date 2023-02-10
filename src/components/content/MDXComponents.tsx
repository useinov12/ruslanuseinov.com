import Head from 'next/head';
import Image from 'next/image';
import TechIcons from './TechIcons';
import { MdxCard } from './MdxCard';

const MDXComponents = {
  Image,
  Head,
  a: ({ href, children }: { href: string; children: string }) => (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  ),
  TechIcons,
  MdxCard,
};

export default MDXComponents;
