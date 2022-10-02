import React from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import { BiTimeFive, BiArrowBack } from 'react-icons/bi';
import Accent from '../../components/Accent';

import MDXComponents from '../../components/content/MDXComponents';

import { allPosts, type Post } from 'contentlayer/generated';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

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
  const post:Post = allPosts.find((post) => post.slug === params?.slug)!;
  return {
    props: {
      post,
    },
  };
};

const PostPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <Layout>
      <div className="text-white flex flex-col justify-center max-w-prose m-auto p-2">
        <Link href="/blog">
          <h3
            className={clsx(
              'inline-flex items-center gap-1 cursor-pointer',
              'group my-6 text-gray-300 hover:text-white'
            )}
          >
            <BiArrowBack
              className={clsx(
                'text-md scale-100 group-hover:translate-x-[-4px] active:translate-x-0 ',
                'transition-all, duration-75'
              )}
            />
            <span>Back to Blog</span>
          </h3>
        </Link>
        <h1 className="text-4xl my-2">{post.title} </h1>
        <div className="inline-flex items-center gap-8 my-2">
          <div className="inline-flex gap-1 items-center">
            <BiTimeFive className="text-xl" />
            <Accent className="text-lg">{post.readingTime}</Accent>
          </div>
          <span className="text-lg">
            {dayjs(post.publishedAt).format('MMMM D, YYYY')}
          </span>
        </div>
        <div className="w-full h-[2px] bg-gray-500 rounded" />
        <div className="">
          <MDXContent components={MDXComponents} />
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;