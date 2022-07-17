import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import PostHolder from "../components/post section/PostHolder";
import Sidebar from "../components/Sidebar";
import { getSortedPostsData } from "../lib/posts";
// -----------------

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
// -----------------
function privacy({ allPostsData }) {
  const recentPost = allPostsData.slice(0, 3);
  const categories = new Set(allPostsData.map((post) => post.category).flat());
  return (
    <Layout>
      <div className="container mx-auto sm:grid grid-cols-6 gap-6">
        <div className="col-start-1 col-end-5 px-2 py-4  md:px-8 ">
          <Head>
            <title>Enjoy off grid | Privacy Policy </title>
            <meta
              name="description"
              content="Privacy Policy page of Enjoy off grid blog"
            />
          </Head>
          <h1 className="font-out text-3xl my-10 text-center">
            Enjoy Off Grid Privacy Policy
          </h1>
          <p className="font-poppins text-sm p-2 sm:p-10 text-center   whitespace-pre-line leading-loose	">
            We Store Cookie Based on your preference.
          </p>
          <div className="pb-10 border-b-2 border-dashed border-[#ffca00] mt-10">
            <PostHolder posts={recentPost} headline="CHECK MOST RECENT POSTS" />
          </div>
        </div>
        <Sidebar categories={categories} hidden="hidden" />
      </div>
    </Layout>
  );
}

export default privacy;
