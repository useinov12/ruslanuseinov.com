import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { sync } from 'glob'

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'src/content/blog');

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));


export async function getSlug() {
  const paths = sync(`${POSTS_PATH}/*.mdx`);

  return paths.map((path) => {
    // holds the paths to the directory of the article
    const pathContent = path.split('/');
    const fileName = pathContent[pathContent.length - 1];
    if(fileName){
        const [slug, _extension] = fileName.split('.');
        return slug;
    }
  });
};

export async function getArticleFromSlug(slug:string) {

    const articleDir = path.join(POSTS_PATH, `${slug}.mdx`)
    const source = fs.readFileSync(articleDir, 'utf-8')
    const { content, data } = matter(source)
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
    }
}

export async function getAllArticles() {
    const articles = fs.readdirSync(POSTS_PATH)

    const collection:PostSummary[] =  articles.reduce((allArticles:any, articleSlug) => {
      // get parsed data from mdx files in the "blog" dir
      const source:any = fs.readFileSync(
        path.join(process.cwd(), '/src/content/blog', articleSlug),
        'utf-8'
      )
      const { data } = matter(source)

      console.log(data)
  
      return [
        {
          ...data,
          slug: articleSlug.replace('.mdx', ''),
          readingTime: readingTime(source).text,
        },
        ...allArticles,
      ]
    }, [])

    return collection
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
    }
}