import {
  type GetStaticProps,
  type InferGetStaticPropsType,
  NextPage,
} from 'next';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import PostCard from '../../components/content/PostCard';
import { allPosts, type Post } from 'contentlayer/generated';

export async function getStaticProps() {
  const posts = allPosts
    .filter((post) => new RegExp(/^(blog\/)/).exec(post._id))
    .map((post) => {
      return {
        title: post.title,
        publishedAt: post.publishedAt,
        description: post.description,
        cover_image: '',
        slug: post.slug,
        readingTime: post.readingTime
      };
    });

  return {
    props: {
      posts: posts,
    },
  };
}

const BlogPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <Layout>
      <main className="bg-dark text-white max-w-screen-lg m-auto p-2 min-h-screen h-full overflow-x-hidden ">
        <h1 className="my-6">Blog</h1>
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {posts.map((postSummary: any) => {
            return (
              <Link
                href={`/blog/${postSummary.slug}`}
                passHref
                key={postSummary.slug}
              >
                <a>
                  <PostCard postSummary={postSummary} />
                </a>
              </Link>
            );
          })}
        </ul>
      </main>
    </Layout>
  );
};
export default BlogPage;
