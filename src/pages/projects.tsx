import React from 'react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';
import dayjs from 'dayjs';
import clsx from 'clsx';

import Accent from '../components/Accent';
import { allPosts, type Post } from 'contentlayer/generated';
import { NextPage, InferGetStaticPropsType } from 'next';
import PostCard from 'src/components/content/PostCard';

export async function getStaticProps() {
  const posts = allPosts.filter((post) =>
    new RegExp(/^(projects\/)/).exec(post._id)
  );
  return {
    props: {
      posts: posts,
    },
  };
}

const ProjectPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <Layout>
      <main>
        <h1 className="my-4">
          <Accent>Projects</Accent>
        </h1>
        <h6 className="font-semibold text-xl text-gray-300">
          Showcase of my works on frontend development
        </h6>
        <div className="w-full h-[1px] mb-8 mt-4 bg-gray-300 rounded-lg" />
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {posts.map((postSummary) => {
            return (
              <Link
                href={`/projects/${postSummary.slug}`}
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

export default ProjectPage;
