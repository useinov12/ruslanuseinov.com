import React from 'react';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import PostCard from '../../components/content/PostCard';

import { getAllPosts } from '../../utils/mdx';
import { PostSummary } from '../../utils/mdx';


const LibraryPage: React.FC<{ posts: PostSummary[] }> = ({ posts }) =>  { 
  return (
    <Layout>
      <main className="bg-dark text-white max-w-screen-lg m-auto p-2 min-h-screen h-full overflow-x-hidden ">
        <h1 className="my-6">Collection of code snippets</h1>
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {posts.map( postSummary => {
            return (
              <Link href={`/library/${postSummary.slug}`} passHref>
                <PostCard postSummary={postSummary}/>
              </Link>
            );
          })}
        </ul>
      </main>
    </Layout>
  );
};

export default LibraryPage;

export async function getStaticProps() {
  const articles = await getAllPosts('library');

  articles
    .map((article: PostSummary) => article.data)
    .sort((a: any, b: any) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1;
      if (a.data.publishedAt < b.data.publishedAt) return -1;
      return 0;
    });

  return {
    props: {
      posts: articles.reverse(),
    },
  };
}
