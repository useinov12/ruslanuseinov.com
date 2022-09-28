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

const PostPage: React.FC<GetStaticPropsReturn> = ({ frontmatter, source }) => {
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
        <h1 className="text-4xl my-2">{frontmatter.title}</h1>
        <div className="inline-flex items-center gap-8 my-2">
          <div className="inline-flex gap-1 items-center">
            <BiTimeFive className="text-xl" />
            <Accent className="text-lg">{frontmatter.readingTime}</Accent>
          </div>
          <span className="text-lg">
            {dayjs(frontmatter.publishedAt).format('MMMM D, YYYY')}
          </span>
        </div>
        <div className="w-full h-[2px] bg-gray-500 rounded" />
        <div className="">
          <MDXRemote {...source} components={MDXComponents} />
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { content, frontmatter } = await getPostFromSlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ['anchor'] },
          },
          { behaviour: 'wrap' },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  });

  return {
    props: {
      source: mdxSource,
      frontmatter,
    },
  };
}
type GetStaticPropsReturn = Awaited<ReturnType<typeof getStaticProps>>['props'];

// dynamically generate the slugs for each article(s)
export async function getStaticPaths() {
  // getting all paths of each article as an array of
  // objects with their unique slugs
  const paths = (await getSlug('blog')).map((slug) => ({ params: { slug } }));

  return {
    paths,
    // in situations where you try to access a path
    // that does not exist. it'll return a 404 page
    fallback: false,
  };
}
