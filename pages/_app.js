import "../styles/globals.css";
import GoogleAnalytics from "../components/GoogleAnalytics";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
    </>
  );
}

export default MyApp;
