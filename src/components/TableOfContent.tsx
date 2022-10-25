import clsx from 'clsx';
import React from 'react';
import GithubSlugger from 'github-slugger';
import { type Post } from 'contentlayer/generated';

const TableOfContents: React.FC<{ post: Post }> = ({ post }) => {
  const headingLines = post.body.raw
    .split('\n')
    .filter((line: string) => line.match(/^##*\s/));

  const headings = headingLines.map((raw: any) => {
    const text = raw.replace(/^#*\s/, '').trim();
    const level = raw.slice(0, 3) === '#' ? 3 : 2;
    const slugger = new GithubSlugger();

    return {
      text,
      level,
      id: slugger.slug(text),
    };
  });

  const [activeId, setActiveId] = React.useState<string>();

  return (
    <div className="flex flex-col items-start mt-4 mb-0 lg:ml-4 cursor-pointer">
      <h3 className="mb-4 font-mono text-xl">Table of Content</h3>
      {headings.map((heading, index) => {
        return (
          <button
            key={index}
            type="button"
            className={clsx(
              `w-full mb-1`,
              'text-left text-gray-300 pl-2',
              'sm:text-md md:text-lg font-mono',
              'whitespace-nowrap',
              'hover:bg-primary-500/20',
              heading.id === activeId
                ? 'border-l-4 border-primary-500 bg-primary-500/20'
                : ' border-l-4 border-transparent'
              // heading.level === 2 ? '' : 'hidden'
            )}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(`#${heading.id}`)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
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
