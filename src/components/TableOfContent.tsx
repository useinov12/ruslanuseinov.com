import clsx from 'clsx';
import React from 'react';
import GithubSlugger from 'github-slugger';
import { allPosts, type Post } from 'contentlayer/generated';

const TableOfContents: React.FC<{ post: Post }> = ({ post }) => {
  const headingLines = post.body.raw
    .split('\n')
    .filter((line: any) => line.match(/^###*\s/));

  const headings = headingLines.map( (raw: any) => {
    const text = raw.replace(/^###*\s/, '').trim();
    const level = raw.slice(0, 3) === '###' ? 3 : 2;
    const slugger = new GithubSlugger();

    return {
      text,
      level,
      id: slugger.slug(text),
    };
  });

  const [activeId, setActiveId] = React.useState<string>();

  return (
    <div className=" flex flex-col items-start mt-4 mb-0 ml-4 cursor-pointer ">
      <h3 className='mb-4 font-mono text-xl'>Table of Content</h3>
      {headings.map((heading, index) => {
        return (
          <button
            key={index}
            type="button"
            className={clsx(
              `${heading.id === activeId ? 'text-primary-400' : 'text-gray-300'}`,
              `${heading.level === 2 ? '' : 'hidden'} `,
              `mb-3 sm:text-md md:text-lg`,
              'whitespace-nowrap'
            )}
            onClick={(e) => {
              e.preventDefault();
                document.querySelector(`#${heading.id}`)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                  inline: 'nearest',
                });
                setActiveId(heading.id)
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