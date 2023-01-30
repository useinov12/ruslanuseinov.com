import { FC, ComponentType } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { BiTimeFive } from 'react-icons/bi';
import Accent from '../Accent';

import MDXComponents from './MDXComponents';
import TableOfContents from 'src/components/TableOfContent';
import { useTheme } from 'src/context/ThemeProvider';
import { allPosts, type Post } from 'contentlayer/generated';
import Image from 'next/image';

const PostContent: FC<{
  post: Post;
  MDXContent: ComponentType<any>;
}> = ({ post, MDXContent }) => {
  const { theme } = useTheme();
  return (
    <main>
      <section
        className={clsx(
          'flex gap-6',
          'md:flex-row',
          'flex-col-reverse justify-between'
        )}
      >
        <aside className="md:w-3/12">
          <TableOfContents post={post} />
        </aside>
        <div className="flex flex-col md:w-9/12">
          <article
            className={clsx(
              'h-[90vh] overflow-y-scroll',
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
              theme === 'light' && 'text-dark'
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
        </div>
      </section>
    </main>
  );
};

export default PostContent;

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
