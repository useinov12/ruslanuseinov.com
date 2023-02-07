import { type Post } from 'contentlayer/generated';
import clsx from 'clsx';

export default function Notes({
  hovered,
  posts,
}: {
  hovered: string | undefined;
  posts: Post[];
}) {
  return (
    <ul className="pr-5 relative">
      {posts.map((postSummary) => (
        <li
          key={postSummary.title}
          className={clsx(
            'absolute',
            'inset-0 pr-20 pt-7',
            'transition-all duration-200 delay-75',
            hovered === postSummary.title
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4',
            'tracking-tight',
            'font-medium'
          )}
        >
          <strong className="">{postSummary.title}</strong>
          <p>{postSummary.comment}</p>
        </li>
      ))}
    </ul>
  );
}
