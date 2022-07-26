import Head from "next/head";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Sidebar from "../components/Sidebar";
import PaginationPost from "../components/pagination/PaginationPost";

// ----------------------------
// change number here to show number of posts in this page
const numberOfPostsToShowPerPage = "6";

// ----------------------------
export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const posts = ({ allPostsData }) => {
  const categories = new Set(allPostsData.map((post) => post.category).flat());
  return (
    <Layout>
      <div className="container mx-auto sm:grid grid-cols-6 gap-6 px-2 md:px-8">
        <div className="col-start-1 col-end-5  py-4   ">
          <Head>
            <title>Enjoy off grid and homesteading blog | All Posts</title>
            <meta
              name="description"
              content="Tips to get started living off the grid and homesteading, info about off grid power sources and off grid farming."
            />
          </Head>
          <PaginationPost
            allPostsData={allPostsData}
            headline="ALL POSTS"
            numberOfPostsToShowPerPage={numberOfPostsToShowPerPage}
            seeAllPostHidden="hidden"
          />
        </div>
        <Sidebar categories={categories} />
      </div>
    </Layout>
  );
};

export default posts;
