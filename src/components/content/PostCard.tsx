import { FC } from 'react';
import clsx from 'clsx';
import { type Post } from 'contentlayer/generated';
import Image from 'next/image';
import { useTheme } from 'src/context/ThemeProvider';
import { BsArrowRightShort } from 'react-icons/bs';

const PostCard: FC<{
  postSummary: Post;
}> = ({
  postSummary: { title, readingTime, description, publishedAt, coverImage },
}) => {
  return (
    <div
      className={clsx(
        'group',
        'py-5',
        'cursor-pointer',
        'overflow-hidden',
        'transition duration-25',
        'hover:border-primary-500',
        'flex flex-col justify-between',
      )}
    >
      <div className={clsx('overflow-hidden', ' w-full h-full relative')}>
        {coverImage && (
          <div
            className={clsx(
              'w-full h-64 ',
              'rounded-md overflow-hidden',
              'relative border-2 group-hover:border-primary-500'
            )}
          >
            <Image
              src={coverImage}
              alt={title}
              layout={'fill'}
              objectFit="cover"
            />
          </div>
        )}
        <div className="px-2 py-5 flex flex-col h-full justify-between">
          <div>
            <h4 className="font-poppins group-hover:text-blue-500">{title}</h4>
            <p className=" font-medium text-md ">{readingTime}</p>
            <p className="py-1 font-medium tracking-tight w-5/6">{description}</p>
          </div>
          <div className="text-bottom self-start inline-flex gap-1 items-center group-hover:text-blue-600">
            <h4>Read</h4>
            <BsArrowRightShort className="text-3xl invisible group-hover:visible group-hover:translate-x-1 transition-all duration-100 ease" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
