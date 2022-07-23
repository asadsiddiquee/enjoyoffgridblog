import Head from "next/head";
import Layout from "../components/layout";
import PostHolder from "../components/post section/PostHolder";
import { getSortedPostsData } from "../lib/posts";
import Sidebar from "../components/Sidebar";

// -----------------
//  change number from here
const numberofRecentPosts = 3;
const numberofTopPickPosts = 3;
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

export default function Home({ allPostsData }) {
  const recentPost = allPostsData.slice(0, numberofRecentPosts);
  const topPick = allPostsData
    .filter((el) => {
      return el.featured == true;
    })
    .slice(0, numberofTopPickPosts);
  const categories = new Set(allPostsData.map((post) => post.category).flat());

  return (
    <Layout>
      <div className="container mx-auto sm:grid grid-cols-6 gap-6 py-4 px-2 md:px-8">
        <div className="col-start-1 col-end-5 ">
          <Head>
            <title>Enjoy off grid homesteading | Living off the grid</title>
            <meta
              name="description"
              content="Blog about homesteading and living off the grid. information about off grid power sources, from solar energy to wind. Off grid farm for self sunstainable living, everything is covered "
            />
          </Head>
          <div className="mt-20 md:mt-10 mb-10 border-b-2 border-dashed pb-5 ">
            <h1 className="font-out text-4xl md:text-5xl font-bold text-center mb-10">
              ENJOY OFF GRID LIVING AND HOMESTEADING
            </h1>
            <p className="font-poppins text-2xl sm:text-xl my-2 text-center">
              All about living off the grid, off grid power system,
              homesteading, way of self sunstainability.
            </p>
          </div>
          <div className="pb-10 border-b-2 border-dashed border-[#ffca00]">
            <PostHolder posts={recentPost} headline="MOST RECENT" />
          </div>
          <div className="pt-10 border-t-2 border-dashed">
            <PostHolder posts={topPick} headline="Top Pick" />
          </div>
        </div>
        <Sidebar
          categories={categories}
          advertiseShow={true}
          advertiseNumber={1}
        />
      </div>
    </Layout>
  );
}
