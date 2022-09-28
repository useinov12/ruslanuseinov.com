import Link from 'next/link';

import { getAllPosts } from '../../utils/mdx';
import Layout from '../../components/layout/Layout';
import { PostSummary } from '../../utils/mdx';
import PostCard from '../../components/content/PostCard';

const BlogPage: React.FC<{ posts: PostSummary[] }> = ({ posts }) => {
  return (
    <Layout>
      <main className="bg-dark text-white max-w-screen-lg m-auto p-2 min-h-screen h-full overflow-x-hidden ">
        <h1 className="my-6">Blog</h1>
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {posts.map( postSummary => {
            return (
              <Link href={`/blog/${postSummary.slug}`} passHref>
                <PostCard postSummary={postSummary}/>
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
  // const articles = await getAllArticles();
  const articles:PostSummary[] = await getAllPosts('blog');

  articles
    .map((article) => article.data)
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
