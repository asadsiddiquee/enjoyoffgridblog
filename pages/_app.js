import Head from "next/head";
import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", "G-041E3P3SRE", {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/enjoyoffgrid/image/upload/v1658614433/assets/favicon_uhmrd7.ico"
        />
        <meta name="robots" content="all" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
