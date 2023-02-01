import Link from 'next/link';
import Layout from 'src/components/layout/Layout';
import PostCard from 'src/components/content/PostCard';
import { allPosts, type Post } from 'contentlayer/generated';
import clsx from 'clsx';
import useLoaded from 'src/hooks/useLoaded';

import Seo from 'src/components/Seo';
import PageHeader from 'src/components/PageHeader';

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

export default function BlogPage({ posts }: { posts: Post[] }) {
  const isLoaded = useLoaded();
  return (
    <Layout>
      <Seo
        description={'Blog by Ruslan Useinov'}
        imageUrl={'/assets/banners/blog_banner.png'}
      />
      <main
        className={clsx(
          'mx-auto',
          'max-w-screen-lg',
          'h-screen',
          isLoaded && 'fade-in-start'
        )}
      >
        <PageHeader
          title="Blog"
          heading="For patterns, tutorials and my setups"
        />
        <ul
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 justify-center"
          data-fade="4"
        >
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
}
