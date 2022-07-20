import { getAllPostSlugs, getPostData, getSortedPostsData } from "../lib/posts";
import Image from "../components/Image";
import Link from "next/link";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import Layout from "../components/layout";
import Sidebar from "../components/Sidebar";
import Social from "../components/Social";
import NextPrevPosts from "../components/NextPrevPosts";
// -----------------

// components to pass toward mdx. only reason i'm sticking with mdx
const components = {
  img: (props) => (
    // height and width are part of the props, so they get automatically passed here with {...props}
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...props}
      layout="responsive"
      placeholder="blur"
      blurDataURL={props.src}
    />
  ),
  Link,
};

// getting data from mdx
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  const allPostData = await getSortedPostsData();
  return {
    props: {
      postData,
      allPostData,
    },
  };
}
// -----------------

//  generating slug
export async function getStaticPaths() {
  const paths = await getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}
// -----------------

//  page content *********************

export default function Post({ postData, allPostData }) {
  const index = allPostData.findIndex((object) => {
    return object.slug === postData.slug;
  });

  let prevPost;
  let nextPost;

  index == 0 ? (prevPost = false) : (prevPost = true);
  index == allPostData.length - 1 ? (nextPost = false) : (nextPost = true);
  const categories = new Set(allPostData.map((post) => post.category).flat());
  return (
    <Layout>
      <div className="container mx-auto sm:grid grid-cols-6 gap-6 ">
        <div className="col-start-1 col-end-5 px-2 py-4 md:px-8 container mx-auto  ">
          <Head>
            <title>{postData.metaTitle}</title>
            <meta name="description" content={postData.metaDesc} />
          </Head>
          <div className="mb-12">
            <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold font-out py-3">
              {postData.title.toUpperCase()}
            </h1>

            {/* <p className="italic text-md text-cyan-700 my-2">
                           Published on : {postData.date}
                         </p> */}

            <Social postData={postData} />

            <div className="font-out text-sm md:text-base lg:text-lg py-2 mb-4 xl:text-center">
              <Link href="/">
                <a className="inline-block font-thin border-b border-dashed border-black  ">
                  Home
                </a>
              </Link>
              <div className="inline"> {" / "} </div>
              <div className="inline font-thin border-b border-dashed border-black text-slate-500">
                {postData.slug}
              </div>
            </div>
            <article className="prose prose-stone md:prose-xl lg:prose-2xl font-poppins prose-headings:font-out  ">
              <MDXRemote {...postData.mdxSource} components={components} />
            </article>
          </div>
          <NextPrevPosts
            prevPost={prevPost}
            nextPost={nextPost}
            allPostData={allPostData}
            index={index}
          />
        </div>
        <Sidebar categories={categories} />
      </div>
    </Layout>
  );
}
