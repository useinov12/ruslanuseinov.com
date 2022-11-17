import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import clsx from 'clsx';
import Accent from '../components/Accent';
import Button from '../components/Button';
import UnstyledLink from '../components/UnstyledLink';

import { IoNewspaperSharp } from 'react-icons/io5';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import Link from 'next/link';
import useLoaded from 'src/hooks/useLoaded';
import { NextSeo } from 'next-seo';
import { ThemeContext } from 'src/context/ThemeProvider';

const Home: NextPage = () => {
  const isLoaded = useLoaded();
  const { theme } = React.useContext(ThemeContext);
  return (
    <Layout>
      <NextSeo openGraph={openGraph} twitter={twitter} />
      <main
        className={clsx(
          'max-w-screen-lg',
          'flex flex-col justify-center',
          'w-full h-screen',
          'relative',
          isLoaded && 'fade-in-start'
        )}
      >
        <div className="p-2 lg:p-0" data-fade="1">
          <h1 className="text-4xl md:text-6xl tracking-tight font-extrabold drop-shadow-2xl">
             {theme === 'light' ? 'Front End Developer' : <Accent>Front End Developer</Accent>}
          </h1>
          <p className="text-xl md:text-xl my-3 cursor-default drop-shadow-2xl" data-fade="2">
            I love to create beautiful and performant web with delightful user
            experiences
          </p>

          <div
            className={clsx(
              'w-full h-[2px] my-4  rounded-lg',
              theme === 'light' ? 'bg-gray-700' : 'bg-gray-200'
            )}
            data-fade="3"
          />

          <div className="inline-flex gap-3" data-fade="4">
            <Link href="/blog">
              <Button className='text-lg'>Read Blog</Button>
            </Link>
            <Link href="/about">
              <Button className='text-lg'>About</Button>
            </Link>
          </div>

          <div className="flex flex-wrap w-full gap-5 my-4" data-fade="5">
            {linkList.map(({ text, path, Icon }) => (
              <li key={text} className="list-none">
                <UnstyledLink
                  href={path}
                  className={clsx(
                    'inline-flex items-center gap-1 ',
                    theme === 'light'
                      ? 'text-gray-900 hover:text-gray-800'
                      : 'text-gray-300 hover:text-white',
                    'focus:outline-none',
                    'transition-colors',
                    'cursor-alias',
                    'drop-shadow hover:drop-shadow-xl'
                  )}
                >
                  <Icon className="text-2xl" />
                  <span className="text-xl">{text}</span>
                </UnstyledLink>
              </li>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;

const linkList = [
  {
    path: '/',
    text: 'Resume',
    Icon: IoNewspaperSharp,
  },
  {
    path: 'https://www.linkedin.com/in/ruslan-useinov-330b5a23a',
    text: 'LinkedIn',
    Icon: SiLinkedin,
  },
  {
    path: 'https://github.com/useinov12',
    text: 'github.com/useinov12',
    Icon: SiGithub,
  },
];

const openGraph = {
  type: 'website',
  locale: 'en_IE',
  url: 'https://ruslan-useinov.com',
  siteName: 'ruslan-useinov.com',
  images: [
    {
      url: 'https://ruslan-useinov.com/favicon/og-default.png',
      width: 1200,
      height: 630,
      alt: 'Og Image Alt',
      type: 'image/png',
    },
  ],
};

const twitter = { cardType: 'summary_large_image' };
