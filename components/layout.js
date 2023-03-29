import Navbar from './Navbar';
import Footer from './Footer';
import CookieConsent, { Cookies } from 'react-cookie-consent';
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="">
        <main className="">{children}</main>
      </div>
      <Footer />
      <CookieConsent
        acceptOnScroll={true}
        acceptOnScrollPercentage={50}
        location="bottom"
        buttonText="Okay"
        cookieName="myAwesomeCookieName2"
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: '#4e503b', fontSize: '14px' }}
        expires={150}
        enableDeclineButton
        flipButtons
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  );
}
