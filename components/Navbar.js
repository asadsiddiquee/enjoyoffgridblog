import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="container mx-auto flex justify-between items-center px-2 py-1 md:px-8 sticky top-0 left-0 sm:relative bg-white z-50 ">
      <div>
        <Link href="/">
          <div className="sm:hover:cursor-pointer relative w-[100px] h-[107px]">
            <Image
              src="https://res.cloudinary.com/enjoyoffgrid/image/upload/v1658614433/assets/logo_aktait.png"
              alt="logo"
              objectFit="contain"
              layout="fill"
              placeholder="blur"
              blurDataURL="https://res.cloudinary.com/enjoyoffgrid/image/upload/v1658614433/assets/logo_aktait.png"
            />
          </div>
        </Link>
      </div>

      {/*desktop menu  */}
      <div className="hidden sm:flex items-center font-out space-x-2 md:space-x-6 text-lg md:text-xl underline h-8">
        <Link href="https://www.instagram.com/enjoytheoffgrid">
          <a target="_blank" className=" inline-block text-2xl text-red-500 ">
            <FaInstagram />
          </a>
        </Link>

        <Link href="/posts">
          <a>All Posts</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/privacy">
          <a>Privacy Policy</a>
        </Link>
      </div>
      {/* mobile menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "hidden"
            : "sm:hidden top-28 right-0 fixed pt-14 w-full h-full bg-white flex flex-col justify-start items-center text-3xl space-y-4"
        }
      >
        <Link href="https://www.instagram.com/enjoytheoffgrid">
          <a target="_blank" className=" inline-block text-4xl text-red-500 ">
            <FaInstagram />
          </a>
        </Link>
        <Link href="/posts">
          <a>All Posts</a>
        </Link>
        <Link href={`/#categories`}>
          <a>Categories</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/privacy">
          <a>Privacy Policy</a>
        </Link>
      </div>
      {/* hamburger icon */}
      <div
        onClick={handleNav}
        className=" sm:hidden top-6 right-0 fixed z-20 text-3xl m-3 cursor-pointer "
      >
        {nav ? <GiHamburgerMenu /> : <ImCross />}
      </div>
    </div>
  );
}

export default Navbar;
