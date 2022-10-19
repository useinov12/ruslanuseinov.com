import React from 'react';
import {
  NextPage,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from 'next';
import clsx from 'clsx';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';

import { allPosts, type Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import PostContent from 'src/components/content/PostContent';

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
  const post: Post = allPosts.find((post) => post.slug === params?.slug)!;
  return {
    props: {
      post,
    },
  };
};

const PostPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <Layout>
      <div
        className={clsx(
          'flex flex-col',
          'justify-center',
          'm-auto p-2',
          'max-w-screen-lg',
          'text-white'
        )}
      >
        <Link href="/projects">
          <h3
            className={clsx(
              'inline-flex items-center gap-1 cursor-pointer',
              'group my-6 text-gray-300 hover:text-white'
            )}
          >
            <BiArrowBack
              className={clsx(
                'text-md scale-100 group-hover:translate-x-[-4px] active:translate-x-0',
                'transition-all duration-75'
              )}
            />
            <span>Back to Projects </span>
          </h3>
        </Link>
        <PostContent post={post} MDXContent={MDXContent} />
      </div>
    </Layout>
  );
};

export default PostPage;
