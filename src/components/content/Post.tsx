import clsx from 'clsx';
import dayjs from 'dayjs';
import { BiTimeFive } from 'react-icons/bi';
import Accent from '../Accent';

import MDXComponents from '../content/MDXComponents';
import TableOfContents from 'src/components/TableOfContent';
import { useTheme } from 'src/context/ThemeProvider';
import { type Post } from 'contentlayer/generated';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import useLoaded from 'src/hooks/useLoaded';

export default function Post({ post }: { post: Post }) {
  const isLoaded = useLoaded();

  return (
    <div
      className={clsx('h-screen', 'overflow-auto', isLoaded && 'fade-in-start')}
    >
      <div
        className={clsx(
          'relative',
          'flex space-x-4 mx-auto',
          'max-w-screen-lg'
        )}
      >
        <aside data-fade="3" className={clsx('col-span-3 w-3/12')}>
          <TableOfContents post={post} className={clsx('sticky top-44')} />
        </aside>
        <main
          data-fade="2"
          className={clsx('h-full w-9/12', 'space-y-56  p-4')}
        >
          <Article post={post} className="md:w-9/12" />
        </main>
      </div>
    </div>
  );
}

function Article({ post, className }: { post: Post; className?: string }) {
  const { theme } = useTheme();
  const MDXContent = useMDXComponent(post.body.code);

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
            alt={post.title}
          />
        )}
        <MDXContent components={MDXComponents} />
      </div>
    </article>
  );
}

function ArticleHeader({ post }: { post: Post }) {
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
