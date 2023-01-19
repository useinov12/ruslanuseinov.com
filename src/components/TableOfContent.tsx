import clsx from 'clsx';
import React from 'react';
import GithubSlugger from 'github-slugger';
import { type Post } from 'contentlayer/generated';

const TableOfContents: React.FC<{ post: Post }> = ({ post }) => {
  const [activeId, setActiveId] = React.useState<string>();

  /* find heading lines */
  const headingLines = post.body.raw
    .split('\n')
    .filter((line: string) => line.match(/^##*\s/));

  const headings = headingLines.map((raw: any) => {
    const text = raw.replace(/^#*\s/, '').trim();
    const slugger = new GithubSlugger();

    /* count pound signs in heading */
    const level: number = raw.match(/^#*/)[0].length;

    return {
      text,
      level,
      id: slugger.slug(text),
    };
  });

  return (
    <div className="flex flex-col items-start mt-2 mb-0 cursor-pointer">
      <h4 className="mb-4 text-md">Page Content</h4>
      {headings.map((heading, index) => {
        return (
          <button
            key={index}
            type="button"
            className={clsx(
              `w-full mb-1 py-1`,
              'text-left',
              'sm:text-sm font-mono',
              'whitespace-nowrap',
              'hover:bg-primary-500/20',
              'border-l-4',
              heading.id === activeId
                ? 'border-primary-500 bg-primary-500/20'
                : 'border-transparent',
              heading.level === 1
                ? 'pl-2'
                : heading.level === 2
                ? 'pl-4'
                : heading.level === 3
                ? 'pl-6'
                : 'pl-8'
            )}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(`#${heading.id}`)?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest',
              });
              setActiveId(heading.id);
            }}
          >
            {heading.text}
          </button>
        );
      })}
    </div>
  );
};

export default TableOfContents;
