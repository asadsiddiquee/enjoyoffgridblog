import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// import { remark } from "remark";
// import html from "remark-html";
import { serialize } from 'next-mdx-remote/serialize';
import rehypeImgSize from 'rehype-img-size';
import rehypeImgSizeExternal from 'rehype-external-img-size';

const postsDirectory = path.join(process.cwd(), 'posts');

// *************** sorted post data function
// ***************
export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.mdx$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      slug,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
// *************** sorted post data function ends

// ------------

// *************** all post data function
// ***************
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
}
// *************** all post data function end

// ------------

// *************** get post data function
// ***************
export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const mdxSource = await serialize(matterResult.content, {
    mdxOptions: {
      // use the image size plugin, you can also specify which folder to load images from
      // in my case images are in /public/images/, so I just prepend 'public'
      rehypePlugins: [
        [rehypeImgSize, { dir: 'public/images' }],
        [rehypeImgSizeExternal, { dir: 'https://res.cloudinary.com/' }],
      ],
    },
  });

  // Combine the data with the slug
  return {
    slug,
    ...matterResult.data,
    mdxSource,
  };
}
// *************** get post data function end
