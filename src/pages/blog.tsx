import React from 'react';
import {
  type GetStaticProps,
  type InferGetStaticPropsType,
  NextPage,
} from 'next';
import Link from 'next/link';
import Layout from 'src/components/layout/Layout';
import PostCard from 'src/components/content/PostCard';
import { allPosts, type Post } from 'contentlayer/generated';
import clsx from 'clsx';
import useLoaded from 'src/hooks/useLoaded';

import { NextSeo } from 'next-seo';
import { ThemeContext } from 'src/context/ThemeProvider';

export async function getStaticProps() {
  const posts = allPosts.filter((post) =>
    new RegExp(/^(blog\/)/).exec(post._id)
  );
  return {
    props: {
      posts: posts,
    },
  };
}

const BlogPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  const isLoaded = useLoaded();
  const { theme } = React.useContext(ThemeContext);
  return (
    <Layout>
      <NextSeo openGraph={opennGraph} twitter={twitter} />
      <main className={clsx(isLoaded && 'fade-in-start', 'h-screen')}>
        <h1 className={clsx(
          'my-4 text-primary-500"',
          theme === 'light' ? 'text-gray-800' :'text-primary-500"'
        )} data-fade="1">
          Blog
        </h1>
        <h6 className="font-semibold text-xl" data-fade="2">
          For patterns, tutorials and my setups
        </h6>
        <div
          className={clsx(
            'w-full h-[1px] mb-8 mt-4 rounded-lg',
            theme === 'light' ? 'bg-gray-800' : 'bg-gray-300'
          )}
          data-fade="3"
        />
        <ul className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-3" data-fade="4">
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
      </main>
    </Layout>
  );
};
export default BlogPage;

const opennGraph = {
  type: 'website',
  locale: 'en_IE',
  url: 'https://ruslan-useinov.com',
  siteName: 'ruslan-useinov.com',
  images: [
    {
      url: 'https://ruslan-useinov.com/favicon/og-blog.png',
      width: 1200,
      height: 630,
      alt: 'Og Image Alt',
      type: 'image/png',
    },
  ],
};

const twitter = { cardType: 'summary_large_image' };
