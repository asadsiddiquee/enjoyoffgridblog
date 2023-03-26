import Head from 'next/head';
import Layout from '../components/layout';
import PostHolder from '../components/post section/PostHolder';
import Sidebar from '../components/Sidebar';
import { getSortedPostsData } from '../lib/posts';
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
function privacy({ allPostsData }) {
  const recentPost = allPostsData.slice(0, 3);
  const categories = new Set(allPostsData.map((post) => post.category).flat());
  return (
    <Layout>
      <div className="container mx-auto sm:grid grid-cols-6 gap-6 px-2  md:px-8 ">
        <div className="col-start-1 col-end-5 py-4  ">
          <Head>
            <title>Enjoy off grid | Privacy Policy </title>
            <meta
              name="description"
              content="Privacy Policy page of Enjoy off grid blog"
            />
          </Head>
          <h1 className="font-out text-3xl my-10 text-center">
            Enjoy Off Grid Privacy Policy
          </h1>
          <p className="font-poppins text-sm p-2 ">
            This privacy policy will help you understand how we use and protect
            the data you provide to us when you visit enjoyoffgrid.com. We
            reserve the right to change this policy at any given time, of which
            you will be promptly updated. If you want to make sure that you are
            up to date with the latest changes, we advise you to frequently
            visit this page.
          </p>
          <p className="font-out text-sm p-2 ">What User Data We Collect</p>
          <p className="font-poppins text-sm p-2">
            When you visit the website, we may collect the following data:
            <li>Your IP address.</li>
            <li>
              Your contact information and email address[subscriber of
              newsletter].
            </li>
            <li>Other information such as interests and preferences.</li>
            <li>Data profile regarding your online behavior on our website.</li>
          </p>
          <p className="font-out text-sm p-2 ">Why We Collect Your Data</p>
          <p className="font-poppins text-sm p-2">
            We are collecting your data for several reasons:
            <li>To better understand your needs.</li>
            <li>To improve our services and products.</li>
            <li>
              To send you promotional emails containing the information we think
              you will find interesting.
            </li>
            <li>
              To customize our website according to your online behavior and
              personal preferences.
            </li>
          </p>

          <p className="font-out text-sm p-2 ">
            Safeguarding and Securing the Data
          </p>
          <p className="font-poppins text-sm p-2 ">
            enjoyoffgrid.com is committed to secure your data and keeping it
            confidential. enjoyoffgrid.com has done all in its power to prevent
            data theft, unauthorized access, and disclosure by implementing the
            latest technologies and software, which help us safeguard all the
            information we collect online.
          </p>

          <p className="font-out text-sm p-2 ">Our Cookie Policy</p>
          <p className="font-poppins text-sm p-2 ">
            Once you agree to allow our website to use cookies, you also agree
            to use the data it collects regarding your online behavior (analyze
            web traffic, web pages you spend the most time on, and websites you
            visit). The data we collect by using cookies is used to customize
            our website to your needs. After we use the data for statistical
            analysis, the data is completely removed from our systems. Please
            note that cookies dont allow us to gain control of your computer in
            any way. They are strictly used to monitor which pages you find
            useful and which you do not so that we can provide a better
            experience for you.
          </p>

          <p className="font-out text-sm p-2 ">Links to Other Websites </p>
          <p className="font-poppins text-sm p-2 ">
            Our website may contain links that lead to other websites. If you
            click on these links, enjoyoffgrid.com is not held responsible for
            your data and privacy protection. Visiting those websites is not
            governed by this privacy policy agreement. Make sure to read the
            privacy policy documentation of the website you go to from our
            website.
          </p>

          <p className="font-out text-sm p-2 ">
            Restricting the Collection of your Personal Data
          </p>
          <p className="font-poppins text-sm p-2 ">
            At some point, you might wish to restrict the use and collection of
            your personal data. You can achieve this by doing the following:
            When you are filling the forms on the website, make sure to check if
            there is a box which you can leave unchecked, if you dont want to
            disclose your personal information. If you have already agreed to
            share your information with us, feel free to contact us via email
            and we will be more than happy to change this for you.
            enjoyoffgrid.com will not lease, sell or distribute your personal
            information to any third parties, unless we have your permission. We
            might do so if the law forces us. Your personal information will be
            used when we need to send you promotional materials if you agree to
            this privacy policy.
          </p>
          <div className="pb-10 border-b-2 border-dashed border-[#ffca00] mt-10">
            <PostHolder posts={recentPost} headline="CHECK MOST RECENT POSTS" />
          </div>
        </div>
        <Sidebar categories={categories} hidden="hidden" />
      </div>
    </Layout>
  );
}

export default privacy;
