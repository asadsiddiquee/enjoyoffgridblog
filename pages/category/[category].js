import { getSortedPostsData } from "../../lib/posts";
import Head from "next/head";
import Layout from "../../components/layout";
import Sidebar from "../../components/Sidebar";
import PaginationPost from "../../components/pagination/PaginationPost";

// Note:  unfortunately with nextjs i couldnot run two dynamic route in same directory so i had to create folder called category and put the dynamic route there.*****

//  params.category from the data then filtering that includes route name (category) and giving the results
// -----------------
export const getStaticProps = async ({ params }) => {
  const { category } = params;

  const posts = getSortedPostsData().filter((post) =>
    post.category.includes(category)
  );
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
      category,
      catposts: posts.map((post) => post),
    },
  };
};
// -----------------
// getting the category name and setting path params to create route
export const getStaticPaths = async () => {
  const posts = getSortedPostsData();
  const categories = new Set(posts.map((post) => post.category).flat());
  const paths = Array.from(categories).map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false,
  };
};
// -----------------

export default function Home({ category, catposts, allPostsData }) {
  const categories = new Set(allPostsData.map((post) => post.category).flat());

  return (
    <Layout>
      <div className="container mx-auto sm:grid grid-cols-6 gap-6">
        <div className="col-start-1 col-end-5 px-2 py-4 md:px-8 ">
          <Head>
            <title>Enjoy off grid | Category: {category}</title>
            <meta
              name="description"
              content={`Enjoy off grid category page ${category}`}
            />
          </Head>

          <PaginationPost
            allPostsData={catposts}
            headline={`Category: ${category}`}
            numberOfPostsToShowPerPage="6"
          />
        </div>
        <Sidebar categories={categories} />
      </div>
    </Layout>
  );
}
