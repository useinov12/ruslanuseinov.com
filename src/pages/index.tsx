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

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>RuslanUseinov</title>
        <meta name="description" content="Rsualn Useinov web development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={clsx(
          'flex flex-col justify-center  m-auto p-2',
          'w-full min-h-[80vh]',
          'bg-dark text-white  font-medium relative'
        )}
      >
        <div className="p-2 lg:p-0">
          <Accent
            className={clsx(
              'text-4xl md:text-6xl',
              'font-bold text-gradient-to-tr from-indigo-400 via-primary-500 to-primary-400',
              'cursor-default'
            )}
          >
            <span>Front End Developer</span>
          </Accent>
          <p className="text-xl md:text-2xl my-3 cursor-default">
            I love to create beautiful and performant web with delightful user
            experiences
          </p>
          <div className="w-full h-1 my-4 bg-gray-300 rounded-lg" />
          <div className="flex">
            <Link href="/blog">
              <Button className={clsx('text-xl')}>Read Blog</Button>
            </Link>
            <Link href="/about">
              <Button className={clsx('text-xl')}>About</Button>
            </Link>
          </div>
          <div className="flex flex-wrap w-full">
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
