import React from 'react';
import {
  type GetStaticProps,
  type InferGetStaticPropsType,
  NextPage,
} from 'next';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import PostCard from '../../components/content/PostCard';
import Accent from 'src/components/Accent';

import { allPosts, type Post } from 'contentlayer/generated';
import clsx from 'clsx'
import useLoaded from 'src/hooks/useLoaded';

export async function getStaticProps() {
  const posts = allPosts.filter((post) =>
    new RegExp(/^(library\/)/).exec(post._id)
  );
  return {
    props: {
      posts: posts,
    },
  };
}



const LibraryPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  const isLoaded = useLoaded();
  return (
    <Layout>
      <main
        className={clsx(
          isLoaded && 'fade-in-start'
        )}
      >
        <h1 className="my-4" data-fade="1">
          <Accent>Library</Accent>
        </h1>
        <h6 className="font-semibold text-xl text-gray-300" data-fade="2">
          Collection of code snippets
        </h6>
        <div className="w-full h-[1px] mb-8 mt-4 bg-gray-300 rounded-lg" data-fade="3"/>
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" data-fade="4">
          {posts.map((postSummary) => {
            return (
              <Link
                href={`/library/${postSummary.slug}`}
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

export default LibraryPage;
