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
  p: (props: any) => <p style={{ color: 'green' }}>{props.children}</p>,
};

const PostPage: React.FC<GetStaticPropsReturn> = ({ frontmatter, source }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{frontmatter.title ?? 'My blog'}</title>
      </Head>
      <div className="article-container">
        <h1 className="article-title">{frontmatter.title}</h1>
        <p className="publish-date">
          {dayjs(frontmatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
          {frontmatter.readingTime}
        </p>
        <div className="content">
          <MDXRemote {...source} components={components} />
        </div>
      </div>
    </React.Fragment>
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
