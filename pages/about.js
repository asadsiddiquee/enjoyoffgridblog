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
function about({ allPostsData }) {
  const recentPost = allPostsData.slice(0, 3);
  const categories = new Set(allPostsData.map((post) => post.category).flat());
  return (
    <Layout>
      <div className="container mx-auto sm:grid grid-cols-6 gap-6 px-2 md:px-8 ">
        <div className="col-start-1 col-end-5  py-4  ">
          <Head>
            <title>Enjoy off grid and homesteading blog | About us </title>
            <meta
              name="description"
              content="About page of Enjoy off grid and homesteading blog"
            />
          </Head>
          <h1 className="font-out text-3xl my-10 text-center">
            About Enjoy Off Grid Team
          </h1>
          <p className="font-poppins p-2 sm:p-10 md:text-justify whitespace-pre-line leading-loose	">
            Enjoy off grid Team consists of several family members and friends
            who have experienced living off the grid for many years. We check
            each other&apos;s posts. share our ideas and implement them in our
            journey. Among our teams, we also have Engineers, Environmental
            specialists, Teachers, Housewives, students, and others. with
            diverse team we thrive to give you unique and helpful content.
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

export default about;
