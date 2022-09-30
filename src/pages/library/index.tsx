import React from 'react';
import {
  type GetStaticProps,
  type InferGetStaticPropsType,
  NextPage,
} from 'next';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import PostCard from '../../components/content/PostCard';

import { allPosts, type Post } from 'contentlayer/generated';
import readingTime from 'reading-time';

export async function getStaticProps() {
  const posts = allPosts
    .filter((post) => new RegExp(/^(library\/)/).exec(post._id))
    .map((post) => {
      return {
        title: post.title,
        publishedAt: post.publishedAt,
        description: post.description,
        cover_image: '',
        slug: post.slug,
        readingTime: readingTime(post?.body.raw).text,
      };
    });

  return {
    props: {
      posts: posts,
    },
  };
}

const LibraryPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ posts }) => {

  return (
    <Layout>
      <main className="bg-dark text-white max-w-screen-lg m-auto p-2 min-h-screen h-full overflow-x-hidden ">
        <h1 className="my-6">Collection of code snippets</h1>
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
