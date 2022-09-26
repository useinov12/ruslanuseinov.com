import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { trpc } from '../utils/trpc';
import clsx from 'clsx';
import Accent from '../components/layout/Accent';
import Button from '../components/Button';
import UnstyledLink from '../components/UnstyledLink';

import { IoNewspaperSharp } from 'react-icons/io5';
import { SiGithub, SiTwitter } from 'react-icons/si';

const Home: NextPage = () => {
  const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

  return (
    <Layout>
      <Head>
        <title>RuslanUseinov</title>
        <meta name="description" content="Rsualn Useinov web development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="
        flex flex-col items-center justify-center min-h-[80vh] p-4
        bg-dark text-white  font-medium relative"
      >
        <div className="">
          <Accent className="text-4xl font-bold text-gradient-to-tr from-primary-500 via-primary-400 to-white">
            <span>Front End Developer</span>
          </Accent>
          <p className="">
            I love to create beautiful and performant web with delightful user
            experiences
          </p>
          <div className="flex">
            <Button>Read Blog</Button>
            <Button>About</Button>
          </div>
          <div className="flex">
            <UnstyledLink
              href="https://google.com"
              className={clsx(
                'mr-4 inline-flex items-center gap-1 ',
                'text-gray-300 hover:text-white',
                'focus:outline-none',
                'transition-colors',
                'cursor-alias'
              )}
              onClick={() => {/*  */}}
            >
              <IoNewspaperSharp className="text-2xl " />
              <span className="text-lg">Resume</span>
            </UnstyledLink>
            <UnstyledLink
              href="https://google.com"
              className={clsx(
                'mr-2 inline-flex items-center gap-1 ',
                'text-gray-300 hover:text-white',
                'focus:outline-none',
                'transition-colors',
                'cursor-alias'
              )}
              onClick={() => { /*  */}}
            >
              <SiTwitter className="text-2xl" />
              <span className="text-lg">@ruslan_us</span>
            </UnstyledLink>

            <UnstyledLink
              href="https://google.com"
              className={clsx(
                'mr-2 inline-flex items-center gap-1 ',
                'text-gray-300 hover:text-white',
                'focus:outline-none',
                'transition-colors',
                'cursor-alias'
              )}
              onClick={() => {/*  */}}
            >
              <SiGithub className="text-2xl" />
              <span className="text-lg">useinov_12</span>
            </UnstyledLink>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
