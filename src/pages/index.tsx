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

const Home: NextPage = () => {
  const isLoaded = useLoaded();
  return (
    <Layout>
      <main
        className={clsx(
          'max-w-screen-lg',
          'flex flex-col justify-center',
          'w-full min-h-[90vh]',
          'relative',
          isLoaded && 'fade-in-start'
        )}
      >
        <div className={clsx('p-2 lg:p-0')} data-fade="1">
          <Accent
            className={clsx(
              'text-4xl md:text-7xl',
              'font-extrabold text-gradient-to-tr from-indigo-400 via-primary-500 to-primary-400',
              'cursor-default'
            )}
          >
            <span>Front End Developer</span>
          </Accent>
          <p className="text-xl md:text-2xl my-3 cursor-default" data-fade="2">
            I love to create beautiful and performant web with delightful user
            experiences
          </p>
          <div
            className="w-full h-[2px] my-4 bg-gray-200 rounded-lg"
            data-fade="3"
          />
          <div className="flex" data-fade="4">
            <Link href="/blog">
              <Button className={clsx('text-xl')}>Read Blog</Button>
            </Link>
            <Link href="/about">
              <Button className={clsx('text-xl')}>About</Button>
            </Link>
          </div>
          <div className="flex flex-wrap w-full" data-fade="5">
            {linkList.map(({ text, path, Icon }) => (
              <li key={text} className="list-none">
                <UnstyledLink
                  href={path}
                  className={clsx(
                    'mr-4 my-2 inline-flex items-center gap-1 ',
                    'text-gray-300 hover:text-white',
                    'focus:outline-none',
                    'transition-colors',
                    'cursor-alias',
                    'flex'
                  )}
                  onClick={() => {
                    /*  */
                  }}
                >
                  <Icon className="text-3xl" />
                  <span className="text-2xl">{text}</span>
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
