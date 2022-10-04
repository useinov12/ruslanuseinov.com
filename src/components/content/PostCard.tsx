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
        'bg-white',
        'hover:bg-gradient-to-tr hover:from-primary-500 hover:via-primary-500 hover:to-primary-400',
        'p-[2px] mr-2 my-2 flex justify-center items-center',
        'hover:border-primary-500 transition-all duration-200',
        'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
        'transition duration-25',
        'motion-reduce:hover:scale-100',

        'w-full h-full min-h-[10rem]  md:min-h-[14rem] min-w-[18rem] rounded-md',
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
      <div className={clsx('py-1 rounded-md bg-dark w-full h-full')}>
        {coverImage && (
          <div
            className={clsx(
              'w-full h-2/4 border-b border-b-white',
              'group-hover:border-b-primary-500'
            )}
          >
            <Image
              src={coverImage}
              alt={title}
              width={500}
              height={270}
              className=""
            />
          </div>
        )}
        <div className="p-2">
          <h3 className="font-mono">{title}</h3>
          <Accent className="my-2 font-medium">{readingTime}</Accent>
          <p className="py-2">{description}</p>
          <p className="">
            <Accent>{dayjs(publishedAt).format('MMMM D, YYYY')} </Accent>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
