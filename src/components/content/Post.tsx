import clsx from 'clsx';
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
        <aside data-fade="3" className=' w-3/12'>
          <TableOfContents post={post} className='sticky top-44' />
        </aside>
        <main data-fade="2" className="h-full w-9/12 space-y-56  p-4 ">
          <Article post={post} />
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
        'prose',
        'm-0 p-0 pt-16 font-medium',
        theme === 'light' ? 'prose-sky' : 'prose-invert',
        // 'prose-blockquote:border-4 prose-blockquote:border-transparent',
        'prose-blockquote:border-l-primary-500 prose-blockquote:py-0',
        // 'prose-code:text-primary-500',
        'prose-li:list-disc prose-li:p-0 prose-li:m-0',
        'prose-a:text-primary-500',
        'prose-h1:my-4',
        'prose-h2:my-3',
        'prose-h3:my-2',
        'prose-h4:my-1',
        'prose-ul:m-0',
        'flex flex-col',
        'md:w-4/5',
        'prose-h1:text-3xl',
        'tracking-tight',
        className,
      )}
    >
      <h1 className="text-center font-inter">{post.title}</h1>
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
