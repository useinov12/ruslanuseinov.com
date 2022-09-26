import Link from 'next/link';
import dayjs from 'dayjs';
import clsx from 'clsx';

import { getAllArticles } from '../utils/mdx';
import Layout from '../components/layout/Layout';
import { PostSummary } from '../utils/mdx';
import Accent from '../components/layout/Accent';

const BlogPage: React.FC<{ posts: PostSummary[] }> = ({ posts }) => {
  return (
    <Layout>
      <main className="bg-dark text-white w-full min-h-screen h-full p-4 ">
        <h1 className="my-6">Blog</h1>
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {posts.map((frontMatter) => {
            return (
              <Link href={`/blog/${frontMatter.slug}`} passHref>
                <div
                  className={clsx(
                    'w-full rounded-md border-2 border-gray-300 hover:border-primary-500',
                    'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
                    'transition duration-100',
                    'motion-reduce:hover:scale-100',
                    'animate-shadow',
                    'px-3 py-2',
                    'cursor-pointer',
                    'flex flex-col justify-between'
                  )}
                >
                  <div className="">
                    <h3 className="font-mono">{frontMatter.title}</h3>
                    <Accent className="my-2 font-medium">
                      {frontMatter.readingTime}
                    </Accent>
                    <p className="py-2">{frontMatter.description}</p>
                  </div>
                  <p className="">
                    <Accent>
                      {dayjs(frontMatter.publishedAt).format('MMMM D, YYYY')}{' '}
                    </Accent>
                  </p>
                </div>
              </Link>
            );
          })}
        </ul>
      </main>
    </Layout>
  );
};
export default BlogPage;

export async function getStaticProps() {
  const articles = await getAllArticles();

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
