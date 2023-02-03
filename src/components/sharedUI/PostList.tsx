import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { allPosts, type Post } from 'contentlayer/generated';
import Link from 'next/link';
import PostCard from '../content/PostCard';

export default function PostList({
  setHovered,
  posts,
}: {
  setHovered: Dispatch<SetStateAction<string | undefined>>;
  posts: Post[];
}) {
  return (
    <ul className="flex flex-col-reverse" data-fade="5">
      {posts.map((postSummary) => {
        return (
          <li
            key={postSummary.slug}
            onMouseEnter={() => setHovered(postSummary.title)}
            onMouseLeave={() => setHovered(undefined)}
          >
            <Link href={`/blog/${postSummary.slug}`} passHref>
              <a>
                <PostCard postSummary={postSummary} />
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
