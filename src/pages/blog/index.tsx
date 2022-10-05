import {
  type GetStaticProps,
  type InferGetStaticPropsType,
  NextPage,
} from 'next';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import PostCard from '../../components/content/PostCard';
import { allPosts, type Post } from 'contentlayer/generated';
import Accent from 'src/components/Accent';

export async function getStaticProps() {
  const posts = allPosts.filter((post) =>
    new RegExp(/^(blog\/)/).exec(post._id)
  );
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
      <main>
        <h1 className="my-4">
          <Accent>Blog</Accent>
        </h1>
        <h6 className="font-semibold text-xl text-gray-300">
          For patterns, tutorials and my setups
        </h6>
        <div className="w-full h-[1px] mb-8 mt-4 bg-gray-300 rounded-lg" />
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {posts.map((postSummary) => {
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
