import Layout from '../components/layout/Layout';
import Link from 'next/link';
import clsx from 'clsx';
import { allPosts, type Post } from 'contentlayer/generated';
import { NextPage, InferGetStaticPropsType } from 'next';
import PostCard from 'src/components/content/PostCard';
import useLoaded from 'src/hooks/useLoaded';
import { useTheme } from 'src/context/ThemeProvider';
import Seo from 'src/components/Seo';
import { useRouter } from 'next/router';

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

const ProjectPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  const { pathname } = useRouter();
  const isLoaded = useLoaded();
  const { theme } = useTheme();
  return (
    <Layout>
      <Seo
        
        description={'Showcase of my web development projects'}
        imageUrl={'/assets/banners/projects_banner.png'}
      />
      <main className={clsx(isLoaded && 'fade-in-start', 'h-screen')}>
        <h1
          className={clsx(
            'my-4 text-primary-500"',
            theme === 'light' ? 'text-gray-800' : 'text-primary-500"'
          )}
          data-fade="1"
        >
          Projects
        </h1>
        <h6 className="font-semibold text-xl " data-fade="2">
          Showcase of my works
        </h6>
        <div
          className={clsx(
            'w-full h-[1px] mb-8 mt-4 rounded-lg',
            theme === 'light' ? 'bg-gray-800' : 'bg-gray-300'
          )}
          data-fade="3"
        />
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" data-fade="4">
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
  );
};

export default ProjectPage;