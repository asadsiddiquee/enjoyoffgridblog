import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/Outfit-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Poppins-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'G-041E3P3SRE', 'auto');
          ga('send', 'pageview');
        `}
        </Script>
        <Script
          src="https://www.google-analytics.com/analytics.js"
          strategy="afterInteractive"
        />
        ;
      </body>
    </Html>
  );
}
