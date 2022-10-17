import React from 'react';
import {
  NextPage,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from 'next';
import clsx from 'clsx';
import dayjs from 'dayjs';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import { BiTimeFive, BiArrowBack } from 'react-icons/bi';
import Accent from '../../components/Accent';

import MDXComponents from '../../components/content/MDXComponents';

import { allPosts, type Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import TableOfContents from 'src/components/TableOfContent';

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
  console.log(MDXContent)
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
        <Link href="/library">
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
            <span>Back to Library </span>
          </h3>
        </Link>
        <h1 className="text-4xl my-2">{post.title}</h1>
        <div className="inline-flex items-center gap-8 my-2">
          <div className="inline-flex gap-1 items-center">
            <BiTimeFive className="text-xl" />
            <Accent className="text-lg">{post.readingTime}</Accent>
          </div>
          <span className="text-lg">
            {dayjs(post.publishedAt).format('MMMM D, YYYY')}
          </span>
        </div>
        <div className="w-full h-1 my-4 bg-gray-300 rounded-lg" />

        <section
          className={clsx(
            'flex flex-col-reverse justify-between',
            'md:flex-row'
          )}
        >
          <article
            className={clsx(
              'pt-10 pb-8 pr-2 prose text-white',
              'prose-lg prose-ul:pl-14 prose-strong:font-medium',
              'prose-headings:font-medium prose-headings:text-white',
              'prose-blockquote:text-white',
              'prose-strong:text-white',
              'md:w-9/12',
              'prose-code:text-white',
              'prose-a:text-white',
              'prose-a:text-primary-500'
            )}
          >
            <MDXContent components={MDXComponents} />
          </article>

          <aside className="py-7 sticky top-16 self-start md:w-3/12">
            <TableOfContents post={post} />
          </aside>
        </section>
      </div>
    </Layout>
  );
};

export default PostPage;
