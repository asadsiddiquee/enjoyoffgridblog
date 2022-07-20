import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieConsent from "react-cookie-consent";

export default function Layout({ children, categories }) {
  return (
    <>
      <Navbar />
      <div className="">
        <main className="">{children}</main>
      </div>
      <Footer />
      <div className="text-center flex flex-col justify-center">
        <CookieConsent
          acceptOnScroll={true}
          acceptOnScrollPercentage={30}
          expires={365}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </div>
    </>
  );
}

// container mx-auto sm:grid grid-cols-6 gap-6

// col-start-1 col-end-5 px-2 py-4 sm:py-8 md:px-8 md:py-16
