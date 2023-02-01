import React, { ReactNode } from 'react';
import { type GetStaticProps } from 'next';

import { allPosts, type Post as PostType } from 'contentlayer/generated';

import Seo from 'src/components/Seo';
import Layout from 'src/components/layout/Layout';
import Post from 'src/components/content/Post';

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const post: PostType = allPosts.find((post) => post.slug === params?.slug)!;
  return {
    props: {
      post,
    },
  };
};

export default function LibraryPage({
  post,
}: {
  post: PostType;
  children: ReactNode;
}) {
  return (
    <>
      <Seo
        title={post.title}
        description={post.description}
        imageUrl={post.coverImage}
      />
      <Layout>
        <Post post={post} />
      </Layout>
    </>
  );
}
