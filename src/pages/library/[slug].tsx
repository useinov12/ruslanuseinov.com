import React from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import rehypeSlug from 'rehype-slug';
import { MDXRemote } from 'next-mdx-remote';
import rehypeHighlight from 'rehype-highlight';
import rehypeCodeTitles from 'rehype-code-titles';
import { serialize } from 'next-mdx-remote/serialize';
import { getSlug, getPostFromSlug } from '../../utils/mdx';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import { BiTimeFive, BiArrowBack } from 'react-icons/bi';
import Accent from '../../components/Accent';

import MDXComponents from '../../components/content/MDXComponents';

import { allPosts, type Post } from 'contentlayer/generated';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import readingTime from 'reading-time';

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

export const getStaticProps = ({ params }: { params: any }) => {
  const post = allPosts.find((post) => post.slug === params?.slug)!;
  const time = readingTime(post?.body.raw).text;
  return {
    props: {
      post,
      time,
    },
  };
};

const PostPage: React.FC<{ post: any; time: string }> = ({ post, time }) => {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <Layout>
      <div className="text-white flex flex-col justify-center max-w-prose m-auto p-2">
        <Link href="/library">
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
            <span>Back to Library</span>
          </h3>
        </Link>
        <h1 className="text-4xl my-2">{post.title}</h1>
        <div className="inline-flex items-center gap-8 my-2">
          <div className="inline-flex gap-1 items-center">
            <BiTimeFive className="text-xl" />
            <Accent className="text-lg">{time}</Accent>
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
