import { FC } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { type Post } from 'contentlayer/generated';
import Image from 'next/image';
import { useTheme } from 'src/context/ThemeProvider';

const PostCard: FC<{
  postSummary: Post;
}> = ({
  postSummary: { title, readingTime, description, publishedAt, coverImage },
}) => {
  const { theme } = useTheme();
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

        coverImage ? 'min-h-[22rem]' : 'min-h-[10rem]',
        'w-full h-full min-w-[12rem] rounded-md'
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
              'w-full h-1/2 border-b-2 border-b-white',
              'group-hover:border-b-primary-500',
              'overflow-hidden',
              'relative'
            )}
          >
            <Image
              src={coverImage}
              alt={title}
              PageLayout={'fill'}
              objectFit="cover"
              className={clsx(
                'scale-100 motion-reduce:hover:scale-100 ',
                'group-hover:scale-[1.05]',
                'transition duration-75',
                'drop-shadow'
              )}
            />
          </div>
        )}
        <div className="p-2 flex flex-col h-full justify-between">
          <div>
            <h4 className="font-mono drop-shadow">{title}</h4>
            <p className="my-2 font-medium text-md text-primary-500">
              {readingTime}
            </p>
            <p className="py-2 drop-shadow">{description}</p>
          </div>
          <p className="text-primary-500 text-bottom self-end">
            {dayjs(publishedAt).format('MMMM D, YYYY')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
