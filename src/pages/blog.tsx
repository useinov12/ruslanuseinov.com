import {
  type GetStaticProps,
  type InferGetStaticPropsType,
  NextPage,
} from 'next';
import Link from 'next/link';
import Layout from 'src/components/layout/Layout';
import PostCard from 'src/components/content/PostCard';
import { allPosts, type Post } from 'contentlayer/generated';
import Accent from 'src/components/Accent';
import clsx from 'clsx';
import useLoaded from 'src/hooks/useLoaded';
import Seo from 'src/components/Seo';
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
  const isLoaded = useLoaded();
  return (
    <Layout>
      {/* <Seo/> */}
      <main className={clsx(isLoaded && 'fade-in-start')}>
        <h1 className="my-4 font-mono text-primary-500" data-fade="1">
          Blog
        </h1>
        <h6 className="font-semibold text-xl text-gray-300" data-fade="2">
          For patterns, tutorials and my setups
        </h6>
        <div
          className="w-full h-[1px] mb-8 mt-4 bg-gray-300 rounded-lg"
          data-fade="3"
        />
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" data-fade="4">
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
