import Layout from '../components/layout/Layout';
import Link from 'next/link';
import clsx from 'clsx';
import { allPosts, type Post } from 'contentlayer/generated';

import PostCard from 'src/components/content/PostCard';
import useLoaded from 'src/hooks/useLoaded';
import Seo from 'src/components/Seo';
import PageHeader from 'src/components/PageHeader';

export async function getStaticProps() {
  const posts = allPosts.filter((post) =>
    new RegExp(/^(projects\/)/).exec(post._id)
  );
  return {
    props: {
      posts: posts,
    },
  };
}

export default function ProjectPage({ posts }: { posts: Post[] }) {
  const isLoaded = useLoaded();

  return (
    <>
      <Seo
        description={'Showcase of my web development projects'}
        imageUrl={'/assets/banners/projects_banner.png'}
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
          <PageHeader title="Projects" heading="Showcase of my works" />
          <ul
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
            data-fade="4"
          >
            {posts.map((postSummary) => {
              return (
                <Link
                  href={`/projects/${postSummary.slug}`}
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
