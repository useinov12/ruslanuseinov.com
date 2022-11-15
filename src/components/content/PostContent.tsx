import React from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { BiTimeFive } from 'react-icons/bi';
import Accent from '../Accent';

import MDXComponents from './MDXComponents';
import TableOfContents from 'src/components/TableOfContent';

const PostContent: React.FC<{
  post: any;
  MDXContent: React.ComponentType<any>;
}> = ({ post, MDXContent }) => {
  return (
    <>
      <h1 className="text-4xl my-2">{post.title}</h1>
      <div className="inline-flex items-center gap-8 my-2">
        <div className="inline-flex gap-1 items-center">
          <BiTimeFive className="text-xl" />
          <Accent className="text-lg">{post.readingTime}</Accent>
        </div>
        <span className="text-lg">
          {dayjs(post.publishedAt).format('MMMM D, YYYY')}
        </span>
      </div>
      <div className="w-full h-1 my-4 bg-gray-300 rounded-lg" />

      <section
        className={clsx('flex flex-col-reverse justify-between', 'md:flex-row ')}
      >
        <article
          className={clsx(
            'pt-10 pb-8 pr-2 prose-lg prose-invert ',
            'prose-blockquote:border-4 prose-blockquote:border-transparent',
            'prose-blockquote:border-l-primary-500 prose-blockquote:py-0',
            'prose-code:text-primary-500',
            'prose-li:list-disc',
            'prose-a:text-primary-500',
            'md:w-8/12'
          )}
        >
          <MDXContent components={MDXComponents} />
        </article>

        <aside className="py-7 lg:sticky top-16 self-start md:w-4/12">
          <TableOfContents post={post} />
        </aside>
      </section>
    </>
  );
};

export default PostContent;
