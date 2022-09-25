import Link from 'next/link';
import dayjs from 'dayjs';

import { getAllArticles } from '../utils/mdx';

export default function BlogPage({ posts }: { posts: any }) {
  return (
    <>
      <div>
        {posts.map((frontMatter: any) => {
          return (
            <Link href={`/blog/${frontMatter.slug}`} passHref>
              <div>
                <h1 className="title">{frontMatter.title}</h1>
                <p className="summary">{frontMatter.excerpt}</p>
                <p className="date">
                  {dayjs(frontMatter.publishedAt).format('MMMM D, YYYY')}{' '}
                  &mdash; {frontMatter.readingTime}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const articles = await getAllArticles();

  articles
    .map((article: any) => article.data) // get type from mdx
    .sort((a: any, b: any) => {
      //dateTime type ?
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
