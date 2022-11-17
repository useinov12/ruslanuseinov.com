import React from 'react';
import clsx from 'clsx';
import Accent from '../Accent';
import dayjs from 'dayjs';
import { type Post } from 'contentlayer/generated';
import Image from 'next/image';
import { ThemeContext } from 'src/context/ThemeProvider';

const PostCard: React.FC<{
  postSummary: Post;
}> = ({
  postSummary: { title, readingTime, description, publishedAt, coverImage },
}) => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div
      className={clsx(
        'group',
        'cursor-pointer',
        'overflow-hidden',
        'transition duration-25',
        'hover:border-primary-500',
        'flex flex-col justify-between',
        'p-[2px]',

        'drop-shadow hover:drop-shadow-xl',
        'motion-reduce:hover:scale-100 motion-safe:transform-gpu',
        'scale-100 hover:scale-[1.005] active:scale-[0.995] ',
        theme === 'light' ? 'bg-dark/70' : 'bg-white',
        'hover:bg-gradient-to-tr hover:from-primary-500 hover:via-primary-500 hover:to-primary-400',

        coverImage ? 'min-h-[22rem]' : 'min-h-[13rem]',
        'w-full h-full min-w-[15rem] rounded-md'
      )}
    >
      <div
        className={clsx(
          'overflow-hidden',
          'rounded-md w-full h-full relative',
          theme === 'light' ? 'bg-gray-100' : 'bg-dark'
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
              className={clsx(
                'scale-100 motion-reduce:hover:scale-100 ',
                'group-hover:scale-[1.01]',
                'transition duration-25',
                'drop-shadow'
              )}
            />
          </div>
        )}
        <div className="p-2 flex flex-col h-full">
          <h4 className="font-mono drop-shadow">{title}</h4>
          <p className="my-2 font-medium text-md text-primary-500">
            {readingTime}
          </p>
          <p className="py-2 drop-shadow">{description}</p>
          <p className="self-end px-3 text-primary-500">
            {dayjs(publishedAt).format('MMMM D, YYYY')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
