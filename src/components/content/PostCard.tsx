import React from 'react';
import clsx from 'clsx';
import Accent from '../Accent';
import dayjs from 'dayjs';
import { type PostSummary } from '../../utils/mdx';

const PostCard: React.FC<{
  postSummary: PostSummary;
}> = ({ postSummary: { title, readingTime, description, publishedAt } }) => {
  return (
    <div
      className={clsx(
        'w-full min-h-[10rem] md:min-h-[14rem] rounded-md border-2 border-gray-300 hover:border-primary-500',
        'scale-100 hover:scale-[1.01] active:scale-[0.99] motion-safe:transform-gpu',
        'transition duration-100',
        'motion-reduce:hover:scale-100',
        'animate-shadow',
        'px-3 py-2',
        'cursor-pointer',
        'flex flex-col justify-between'
      )}
    >
      <div className="">
        <h3 className="font-mono">{title}</h3>
        <Accent className="my-2 font-medium">{readingTime}</Accent>
        <p className="py-2">{description}</p>
      </div>
      <p className="">
        <Accent>{dayjs(publishedAt).format('MMMM D, YYYY')} </Accent>
      </p>
    </div>
  );
};

export default PostCard;
