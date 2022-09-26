import React from 'react';
import dayjs from 'dayjs';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import rehypeSlug from 'rehype-slug';
import { MDXRemote } from 'next-mdx-remote';
import rehypeHighlight from 'rehype-highlight';
import rehypeCodeTitles from 'rehype-code-titles';
import { serialize } from 'next-mdx-remote/serialize';
import { getSlug, getArticleFromSlug } from '../../utils/mdx';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import { BiTimeFive, BiArrowBack } from 'react-icons/bi';
import clsx from 'clsx'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import('../../components/TestComponent')),
  Image,
  Head,
  h1: (props: any) => <h1 className="text-white my-2">{props.children}</h1>,
  h2: (props: any) => <h2 className="text-white my-2">{props.children}</h2>,
  h3: (props: any) => <h3 className="text-white my-1">{props.children}</h3>,
  p: (props: any) => <p className="text-white my-1">{props.children}</p>,
};

const PostPage: React.FC<GetStaticPropsReturn> = ({ frontmatter, source }) => {
  return (
    <Layout>
      <div className="text-white flex flex-col justify-center max-w-prose m-auto p-2">
        <Link href="/blog">
          <h3 className={clsx(
            'inline-flex items-center gap-1 cursor-pointer',
            'group my-6 text-gray-300 hover:text-white'
          )}>
            <BiArrowBack className={clsx(
              'text-md scale-100 group-hover:translate-x-[-4px] active:translate-x-0 ',
              'transition-all, duration-75',
            )}/>
            <span>Back to Blog</span>
          </h3>
        </Link>
        <h1 className="text-4xl">{frontmatter.title}</h1>
        <div className="inline-flex items-center gap-1">
          <span>
            {dayjs(frontmatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
          </span>
          <BiTimeFive className="text-lg" />
          <span>{frontmatter.readingTime}</span>
        </div>
        <div className="">
          <MDXRemote {...source} components={components} />
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
  //fetch the particular file based on the slug
  const { content, frontmatter } = await getArticleFromSlug(slug);

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
  const paths = (await getSlug()).map((slug) => ({ params: { slug } }));
  console.log('paths', paths);

  return {
    paths,
    // in situations where you try to access a path
    // that does not exist. it'll return a 404 page
    fallback: false,
  };
}
