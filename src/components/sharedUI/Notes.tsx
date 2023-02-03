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
    <ul data-fade="4" className="pr-5 relative">
      <li
        className={clsx(
          'absolute',
          'inset-0 pr-20',
          'transition-all duration-200 delay-75',
          hovered === undefined
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4'
        )}
      >
        <p>
          {
            'Writing about wathever Im currently figuring out and what could be helpful to go in depth to nut frustrated me anymore'
          }
        </p>
      </li>
      {posts.map((postSummary) => (
        <li
          key={postSummary.title}
          className={clsx(
            'absolute',
            'inset-0 pr-20',
            'transition-all duration-200 delay-75',
            hovered === postSummary.title
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          )}
        >
          <strong>{postSummary.title}</strong>
          <p>{postSummary.description}</p>
        </li>
      ))}
    </ul>
  );
}
