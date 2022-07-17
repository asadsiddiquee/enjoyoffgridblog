import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Sidebar from "../components/Sidebar";

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

import React from "react";

const sitemap = ({ allPostsData }) => {
  const categories = new Set(allPostsData.map((post) => post.category).flat());
  return (
    <Layout>
      <div className="container mx-auto sm:grid grid-cols-6 gap-6">
        <div className="col-start-1 col-end-5 px-2 py-4  md:px-8 ">
          <Head>
            <title>Sitemap</title>
            <meta name="description" content="Sitemap of enjoyoffgrid" />
          </Head>
          <div className="flex flex-col  items-center">
            <h2 className="text-2xl mb-10">Sitemap Posts </h2>
            {allPostsData.map((post) => (
              <div key={post.slug}>
                <Link href={post.slug}>
                  <a className="underline">{post.title}</a>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Sidebar categories={categories} />
      </div>
    </Layout>
  );
};

export default sitemap;
