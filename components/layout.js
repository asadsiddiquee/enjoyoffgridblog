import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieConsent from "react-cookie-consent";
import Script from "next/script";

export default function Layout({ children, categories }) {
  const googleCookieN = () => {
    return ((adsbygoogle =
      window.adsbygoogle || []).requestNonPersonalizedAds = 1);
  };
  const googleCookieY = () => {
    (adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 0;
  };
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8098281641773267"
        crossOrigin="anonymous"
      />

      <Navbar />
      <div className="">
        <main className="">{children}</main>
      </div>
      <Footer />

      <CookieConsent
        enableDeclineButton
        flipButtons
        setDeclineCookie={true}
        expires={365}
        onAccept={() => {
          googleCookieY;
        }}
        onDecline={() => {
          googleCookieN;
        }}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  );
}

// container mx-auto sm:grid grid-cols-6 gap-6

// col-start-1 col-end-5 px-2 py-4 sm:py-8 md:px-8 md:py-16
