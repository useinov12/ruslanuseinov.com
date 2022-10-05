import React from 'react';
import clsx from 'clsx';
import Accent from '../Accent';
import dayjs from 'dayjs';
import { type Post } from 'contentlayer/generated';
import Image from 'next/image';

const PostCard: React.FC<{
  postSummary: Post;
}> = ({
  postSummary: { title, readingTime, description, publishedAt, coverImage },
}) => {
  return (
    <div
      className={clsx(
        'bg-gray-300',
        'hover:bg-gradient-to-tr hover:from-primary-500 hover:via-primary-500 hover:to-primary-400',
        'p-[2px] mr-2 my-2 flex justify-center items-center',
        'hover:border-primary-500 transition-all duration-200',
        'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
        'transition duration-25',
        'motion-reduce:hover:scale-100',

        'w-full h-full min-h-[10rem] min-w-[18rem] rounded-md',
        coverImage && 'min-h-[20rem]',
        'scale-100 hover:scale-[1.01] active:scale-[0.99] motion-safe:transform-gpu',
        'transition duration-100',
        'motion-reduce:hover:scale-100',
        'animate-shadow',
        'cursor-pointer',
        'flex flex-col justify-between',
        'overflow-hidden',
        'group'
      )}
    >
      <div
        className={clsx(
          'rounded-md bg-dark w-full h-full relative',
          'overflow-hidden'
        )}
      >
        {coverImage && (
          <div
            className={clsx(
              'w-full h-2/4 border-b-2 border-b-white',
              'group-hover:border-b-primary-500 p-1',
              'overflow-hidden',
              'relative'
            )}
          >
            <Image
              src={coverImage}
              alt={title}
              layout={'fill'}
              objectFit={'cover'}
              className=""
            />
          </div>
        )}
        <div className={clsx('p-2 flex flex-col', 'h-full')}>
          <h4 className="font-mono">{title}</h4>
          <Accent className="my-2 font-medium text-lg">{readingTime}</Accent>
          <p className="py-2 text-gray-300">{description}</p>
          <p className="fixed bottom-0 right-0 px-4 py-2">
            <Accent>{dayjs(publishedAt).format('MMMM D, YYYY')} </Accent>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
