import React from 'react';
import {
  NextPage,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from 'next';
import clsx from 'clsx';
import PageLayout from '../../components/PageLayout/PageLayout';

import { allPosts, type Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import PostLayout from 'src/components/PageLayout/PostLayout';
import useLoaded from 'src/hooks/useLoaded';
import Seo from 'src/components/Seo';
import { useRouter } from 'next/router';

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
  const { pathname } = useRouter();
  const MDXContent = useMDXComponent(post.body.code);
  const isLoaded = useLoaded();
  return (
    <PageLayout>
      <Seo
        url={pathname}
        title={post.title}
        description={post.description}
        imageUrl={post.coverImage}
      />
      <main
        className={clsx(
          'flex flex-col',
          'justify-center',
          'm-auto p-2',
          'max-w-screen-lg',
          isLoaded && 'fade-in-start'
        )}
      >
        <div data-fade="2">
          <PostLayout post={post} MDXContent={MDXContent} />
        </div>
      </main>
    </PageLayout>
  );
};

export default PostPage;
