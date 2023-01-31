import { FC, ComponentType, ReactNode } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { BiTimeFive } from 'react-icons/bi';
import Accent from '../Accent';

import MDXComponents from '../content/MDXComponents';
import TableOfContents from 'src/components/TableOfContent';
import { useTheme } from 'src/context/ThemeProvider';
import { allPosts, type Post } from 'contentlayer/generated';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function Post({
  post,
  children,
}: {
  post: Post;
  children?: ReactNode;
}) {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <main className={clsx('h-screen', 'overflow-auto')}>
      <div
        className={clsx(
          // 'container',
          'relative',
          'flex space-x-4 mx-auto',
          'max-w-screen-lg'
          // 'border border-red-500'
        )}
      >
        <aside
          className={clsx(
            'col-span-3 w-3/12'
            // 'border border-blue-500'
          )}
        >
          <TableOfContents
            post={post}
            className={clsx(
              'sticky top-44'
              // 'border border-purple-500'
            )}
          />
        </aside>
        <main
          className={clsx(
            'h-full w-9/12',
            'space-y-56  p-4'
            // ' border border-green-500'
          )}
        >
          <Article post={post} MDXContent={MDXContent} className="md:w-9/12" />
        </main>
      </div>

      <section className="grid h-screen w-screen place-items-center">
        {children}
      </section>
    </main>
  );
}

      {/* <main
        className={clsx(
          'flex flex-col',
          'justify-center',
          isLoaded && 'fade-in-start'
        )}
      >
        <div data-fade="2"> */}
          {/* <PostLayout post={post} MDXContent={MDXContent} /> */}
        {/* </div>
      </main> */}

function Article({
  post,
  MDXContent,
  className,
}: {
  post: Post;
  MDXContent: ComponentType<any>;
  className?: string;
}) {
  const { theme } = useTheme();
  return (
    <article
      className={clsx(
        'prose-lg',
        'pb-8 pr-6',
        'prose-blockquote:border-4 prose-blockquote:border-transparent',
        'prose-blockquote:border-l-primary-500 prose-blockquote:py-0',
        'prose-code:text-primary-500',
        'prose-li:list-disc prose-li:p-0 prose-li:m-0',
        'prose-a:text-primary-500',
        // 'prose-p:font-semibold',
        'prose-headings:my-2',
        'prose-p:my-0',
        'prose-h1:my-4',
        'prose-ul:m-0',
        theme === 'light' && 'text-dark',
        'flex flex-col',
        // 'max-w-screen-md',
        className
      )}
    >
      <ArticleHeader post={post} />
      <div className="py-5">
        {post.coverImage && (
          <Image
            src={post.coverImage}
            width="900"
            height="500"
            objectFit="contain"
            objectPosition="left top"
            className="rounded"
          />
        )}
        <MDXContent components={MDXComponents} />
      </div>
    </article>
  );
}

function ArticleHeader({ post }: { post: any }) {
  const { theme } = useTheme();
  return (
    <>
      <h4 className="text-2xl my-1">{post.title}</h4>
      <div className="inline-flex items-center gap-8 my-1">
        <div className="inline-flex gap-1 items-center">
          <BiTimeFive className="text-xl" />
          <Accent className="text-lg">{post.readingTime}</Accent>
        </div>
        <span className="text-lg">
          {dayjs(post.publishedAt).format('MMMM D, YYYY')}
        </span>
      </div>
      <div
        className={clsx(
          'w-full h-[2px] my-1  rounded-lg',
          theme === 'light' ? 'bg-gray-700' : 'bg-gray-200'
        )}
      />
    </>
  );
}
