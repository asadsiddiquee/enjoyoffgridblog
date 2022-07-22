import Head from "next/head";
import "../styles/globals.css";
import favicon from "../public/favicon.ico";
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
        <link rel="icon" href={favicon.src} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
