import React from 'react';
import {
  type GetStaticProps,
  type InferGetStaticPropsType,
  NextPage,
} from 'next';
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
import { allPosts, type Post } from 'contentlayer/generated';
import PostCard from 'src/components/content/PostCard';

export async function getStaticProps() {
  const posts = allPosts.filter((post) =>
    new RegExp(/^(blog\/)/).exec(post._id)
  );
  const projects = allPosts.filter((post) =>
    new RegExp(/^(projects\/)/).exec(post._id)
  );
  const snippets = allPosts.filter((post) =>
    new RegExp(/^(library\/)/).exec(post._id)
  );
  return {
    props: {
      posts: posts,
      projects:projects,
      snippets:snippets
    },
  };
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
  projects,
  snippets,
}) => {
  const isLoaded = useLoaded();
  const { theme } = React.useContext(ThemeContext);
  return (
    <Layout>
      <NextSeo openGraph={openGraph} twitter={twitter} />
      <main
        className={clsx(
          'max-w-screen-lg',
          'flex flex-col justify-center',
          'w-full h-full',
          // 'relative',
          isLoaded && 'fade-in-start'
        )}
      >
        <section
          className="p-2 lg:p-0 relative h-[95vh] flex flex-col justify-center"
          data-fade="1"
        >
          <h1 className="text-4xl md:text-6xl tracking-tight font-extrabold">
            {theme === 'light' ? (
              'Front End Developer'
            ) : (
              <Accent>Front End Developer</Accent>
            )}
          </h1>
          <p className="text-xl md:text-xl my-3 cursor-default" data-fade="2">
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
              <Button className="text-lg">Read Blog</Button>
            </Link>
            <Link href="/about">
              <Button className="text-lg">About</Button>
            </Link>
          </div>

          <div className="flex flex-wrap w-full gap-5 my-4 z-10" data-fade="5">
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
          <div data-fade="6">
            <Polkadots className="hidden md:block md:absolute -bottom-20 right-0 -z-10 w-2/5" />
          </div>
        </section>
        {/* <BlogPosts posts={posts}/>
        <Projects projects={projects}/>
        <Library snippets={snippets}/> */}
      </main>
    </Layout>
  );
};

export default Home;

const BlogPosts: NextPage<{posts:Post[]}> = ({
  posts,
}) => {
  return (
    <section className="p-2 lg:p-0 h-[80vh] flex flex-col relative my-8">
      <h2 className="text-3xl md:text-5xl tracking-tight font-extrabold">
        Featured Posts
      </h2>
      <ul
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 my-8"
        data-fade="4"
      >
        {posts.map((postSummary) => {
          return (
            <Link
              href={`/blog/${postSummary.slug}`}
              passHref
              key={postSummary.slug}
            >
              <a>
                <PostCard postSummary={postSummary} />
              </a>
            </Link>
          );
        })}
      </ul>

      <Polkadots className="absolute bottom-10 left-0 w-2/5" />
    </section>
  );
};

const Projects: NextPage<{projects:Post[]}> = ({
  projects,
}) => {
  return (
    <section className="p-2 lg:p-0 h-[80vh] flex flex-col relative my-8">
      <h2 className="text-3xl md:text-5xl tracking-tight font-extrabold">
        Featured Projects
      </h2>
      <ul
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 my-8 z-10"
        data-fade="4"
      >
        {projects.map((postSummary) => {
          return (
            <Link
              href={`/blog/${postSummary.slug}`}
              passHref
              key={postSummary.slug}
            >
              <a>
                <PostCard postSummary={postSummary} />
              </a>
            </Link>
          );
        })}
      </ul>

      <Polkadots className="absolute bottom-10 right-0 w-2/5 z-0" />
    </section>
  );
};

const Library: NextPage<{snippets:Post[]}> = ({
  snippets,
}) => {
  return (
    <section className="p-2 lg:p-0 h-[80vh] flex flex-col relative my-8">
      <h2 className="text-3xl md:text-5xl tracking-tight font-extrabold">
        Featured Code Snippets
      </h2>
      <ul
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 my-8"
        data-fade="4"
      >
        {snippets.map((postSummary) => {
          return (
            <Link
              href={`/blog/${postSummary.slug}`}
              passHref
              key={postSummary.slug}
            >
              <a>
                <PostCard postSummary={postSummary} />
              </a>
            </Link>
          );
        })}
      </ul>

      <Polkadots className="absolute bottom-20 left-0 w-2/5" />
    </section>
  );
};

const Polkadots = ({ className }: { className?: string }) => {
  return (
    <svg className={clsx(className)}>
      <defs>
        <pattern
          id="myPattern"
          x="24"
          y="24"
          width="25"
          height="25"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="10"
            cy="10"
            r="4"
            style={{
              stroke: 'none',
              fill: '#3b82f6',
              filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))',
            }}
          />
        </pattern>
      </defs>

      <rect width="600" height="200" style={{ fill: 'url(#myPattern)' }} />
    </svg>
  );
};

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
