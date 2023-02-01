import Layout from 'src/components/layout/Layout';
import Link from 'next/link';
import PostCard from 'src/components/content/PostCard';

import { allPosts, type Post } from 'contentlayer/generated';
import clsx from 'clsx';
import useLoaded from 'src/hooks/useLoaded';
import Seo from 'src/components/Seo';
import PageHeader from 'src/components/PageHeader';

export async function getStaticProps() {
  const posts = allPosts.filter((post) =>
    new RegExp(/^(library\/)/).exec(post._id)
  );
  return {
    props: {
      posts: posts,
    },
  };
}

export default function LibraryPage({ posts }: { posts: Post[] }) {
  const isLoaded = useLoaded();
  return (
    <>
      <Seo
        description={'Library of useful code snippets'}
        imageUrl={'/assets/banners/library_banner.png'}
      />
      <Layout>
        <main
          className={clsx(
            'mx-auto',
            'max-w-screen-lg',
            'h-screen',
            isLoaded && 'fade-in-start'
          )}
        >
          <PageHeader title="Library" heading="Collection of code snippets" />
          <ul
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
            data-fade="4"
          >
            {posts.map((postSummary) => {
              return (
                <Link
                  href={`/library/${postSummary.slug}`}
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
    </>
  );
}
