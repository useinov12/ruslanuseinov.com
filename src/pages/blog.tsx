import Layout from 'src/components/layout/Layout';
import { allPosts, type Post } from 'contentlayer/generated';
import clsx from 'clsx';
import useLoaded from 'src/hooks/useLoaded';
import Seo from 'src/components/Seo';
import { useState } from 'react';
import Notes from 'src/components/sharedUI/Notes';
import Categories from 'src/components/sharedUI/Categories';
import PostList from 'src/components/sharedUI/PostList';

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

  const [hovered, setHovered] = useState<string | undefined>();

  return (
    <Layout>
      <Seo
        description={'Blog by Ruslan Useinov'}
        imageUrl={'/assets/banners/blog_banner.png'}
      />
      <div
        className={clsx(
          'h-screen',
          'overflow-auto',
          'mx-auto',
          isLoaded && 'fade-in-start'
        )}
      >
        <section className="relative flex max-w-screen-lg mx-auto">
          <aside className="hidden sm:block w-1/2 ">
            <div className="sticky top-12">
              <h2 className="" data-fade="1">
                Blog
              </h2>
              <h6 className="font-medium" data-fade="2">
                For patterns, learning and setups
              </h6>
              <Categories />
              <Notes hovered={hovered} posts={posts} />
            </div>
          </aside>
          <main className="h-full w-full sm:w-1/2 pt-12">
            <PostList posts={posts} setHovered={setHovered} />
          </main>
        </section>
      </div>
    </Layout>
  );
}
