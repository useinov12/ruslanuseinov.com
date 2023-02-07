import Layout from 'src/components/layout/Layout';
import Link from 'next/link';

import { allPosts, type Post } from 'contentlayer/generated';
import clsx from 'clsx';
import useLoaded from 'src/hooks/useLoaded';
import Seo from 'src/components/Seo';
import { BsArrowRightShort } from 'react-icons/bs';
import { useTheme } from 'src/context/ThemeProvider';

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
          <h2 className="pt-12" data-fade="1">
            Library
          </h2>
          <h6 className="font-medium opacity-75" data-fade="2">
            Collection of code snippets, patterns, copy/paste solutions and
            setups
          </h6>
          <PostList posts={posts} />
        </main>
      </Layout>
    </>
  );
}

function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 mt-5" data-fade="4">
      {posts.map((postSummary) => {
        return (
          <Link
            href={`/library/${postSummary.slug}`}
            passHref
            key={postSummary.slug}
          >
            <a>
              <SnippetCard postSummary={postSummary} />
            </a>
          </Link>
        );
      })}
    </ul>
  );
}

function SnippetCard({ postSummary }: { postSummary: Post }) {
  const { theme } = useTheme();
  return (
    <section
      className={clsx(
        'border rounded',
        'min-h-[10rem]',
        theme === 'light' ? 'border-gray-600' : 'border-white',
        'hover:border-blue-500'
      )}
    >
      <div className="p-2 flex flex-col h-full justify-between">
        <div>
          <h4 className="font-poppins group-hover:text-blue-500">
            {postSummary.title}
          </h4>
          <p className=" font-medium text-md ">{postSummary.readingTime}</p>
          <p className="py-1 font-medium tracking-tight w-5/6">
            {postSummary.description}
          </p>
        </div>
        <div className="text-bottom self-start inline-flex gap-1 items-center group-hover:text-blue-600">
          <h4>Read</h4>
          <BsArrowRightShort className="text-3xl invisible group-hover:visible group-hover:translate-x-1 transition-all duration-100 ease" />
        </div>
      </div>
    </section>
  );
}
