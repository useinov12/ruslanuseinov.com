import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { sync } from 'glob';
import { ContextType } from 'react';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'src/content/blog');

const BASE_PATH = path.join(process.cwd(), `src/content/`);

/**
 * Only include md(x) files
 */
const mdxFiles = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

/**
 *  Holds the paths to the directory of the article
 *  @param {string} contentType library | blog | projetcs
 */
export async function getSlug(contentType:string) {
  const postsPath = path.join(BASE_PATH, contentType)

  const paths = sync(`${postsPath}/*.mdx`);

  return paths.map((path) => {
    const pathContent = path.split('/');
    const fileName = pathContent[pathContent.length - 1];
    if (fileName) {
      const [slug, _extension] = fileName.split('.');
      return slug;
    }
  });
}

/**
 *  Queries post of a slug
 * @param {string} slug `${slug}.mdx`
 */
export async function getPostFromSlug(slug: string) {
  const articleDir = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(articleDir, 'utf-8');
  const { content, data } = matter(source);
  return {
    content,
    frontmatter: {
      slug,
      description: data.description,
      title: data.title,
      publishedAt: data.publishedAt,
      readingTime: readingTime(source).text,
      ...data,
    },
  };
}

/**
 * Queries summary of all posts for given content type
 * @param {string} contentType library | blog | projetcs
 */
export async function getAllPosts(contentType: string) {
  const sourcePath = path.join(process.cwd(), `src/content/${contentType}`);

  const articlesSource = fs.readdirSync(sourcePath);

  const articlesMetaInfo: any[] = articlesSource.reduce(
    (allArticles: any, articleSlug) => {
      // get parsed data from mdx files in the "blog" dir
      const source: any = fs.readFileSync(
        path.join(sourcePath, articleSlug),
        'utf-8'
      );
      const { data } = matter(source);

      return [
        {
          ...data,
          slug: articleSlug.replace('.mdx', ''),
          readingTime: readingTime(source).text,
        },
        ...allArticles,
      ];
    },
    []
  );

  return articlesMetaInfo;
}

export type PostSummary = {
  title: string;
  publishedAt: string;
  description: string;
  cover_image: string;
  slug: string;
  readingTime: string;
  data: {
    [key: string]: any;
  };
};
