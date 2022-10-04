import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import clsx from 'clsx';
import Accent from '../components/Accent';
import Button from '../components/Button';
import UnstyledLink from '../components/UnstyledLink';

import { IoNewspaperSharp } from 'react-icons/io5';
import { SiGithub, SiTwitter } from 'react-icons/si';

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
          'flex flex-col justify-center max-w-screen-lg m-auto p-2',
          'w-screen min-h-[80vh]',
          'bg-dark text-white  font-medium relative'
        )}
      >
        <div className="p-2 lg:p-0">
          <Accent
            className={clsx(
              'text-4xl md:text-6xl',
              'font-bold text-gradient-to-tr from-primary-500 via-blue-500 to-primary-400',
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
            <Button className={clsx('text-xl')}>Read Blog</Button>
            <Button className={clsx('text-xl')}>About</Button>
          </div>
          <div className="flex flex-wrap w-full">
            {linkList.map(({ text, path }) => (
              <UnstyledLink
                href={path}
                className={clsx(
                  'mr-4 my-2 inline-flex items-center gap-1 ',
                  'text-gray-300 hover:text-white',
                  'focus:outline-none',
                  'transition-colors',
                  'cursor-alias'
                )}
                onClick={() => {
                  /*  */
                }}
              >
                {text}
              </UnstyledLink>
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
    text: [
      <IoNewspaperSharp className="text-2xl " />,
      <span className="text-lg">Resume</span>,
    ],
  },
  {
    path: '/',
    text: [
      <SiTwitter className="text-2xl" />,
      <span className="text-lg">@ruslan_us</span>,
    ],
  },
  {
    path: '/',
    text: [
      <SiGithub className="text-2xl" />,
      <span className="text-lg">useinov_12</span>,
    ],
  },
];
