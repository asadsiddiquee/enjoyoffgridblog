import Link from "next/link";
import Layout from "../components/layout";
import Head from "next/head";

function error404() {
  return (
    <Layout>
      <Head>
        <title>Page not found | Enjoy off grid</title>
        <meta name="description" content="Page not found. Enjoy off grid" />
      </Head>
      <div className="min-h-screen">
        <h2 className="text-3xl font-out text-center h-52 ">
          Error 404! Page not found.
        </h2>

        <p className="text-center">
          Go back to{" "}
          <Link href="/">
            <a className="underline">Home</a>
          </Link>{" "}
          page and see other content
        </p>
      </div>
    </Layout>
  );
}

export default error404;
