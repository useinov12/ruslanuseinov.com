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
  return (
    <Layout>
      <main>
        <h1 className="my-4">
          <Accent>Collection of code snippets</Accent>
        </h1>
        <div className="w-full h-1 my-4 bg-gray-300 rounded-lg" />
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
