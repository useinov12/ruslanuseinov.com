import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeHighlight from 'rehype-highlight'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: '*/*.mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'string',
      required: 'true',
    },
    description: {
      type: 'string',
      required: 'true',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) =>
        post._raw.sourceFileName
          // hello-world.mdx => hello-world
          .replace(/\.mdx$/, ''),
    },
    readingTime: {
      type: 'string',
      resolve: (doc) => readingTime(doc.body.raw).text,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],

  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeHighlight,
      [rehypePrismPlus, { ignoreMissing: true,}],
    ],
  },

});