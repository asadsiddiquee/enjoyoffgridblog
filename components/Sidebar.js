import Image from "next/image";
import Link from "next/link";
import React from "react";

function Sidebar(props) {
  const { categories, hidden } = props;
  return (
    <div className="bg-slate-200/30 rounded-xl col-start-5 col-end-7 flex flex-col items-center">
      <div
        className={`flex flex-col items-center pb-10 border-b-2 border-dashed  ${hidden}`}
      >
        <h2 className="mt-10 text-xl font-out font-bold">
          Enjoy Off Grid Team
        </h2>
        <div className="relative h-[107px] w-[100px]">
          <Image
            src="/logo.png"
            objectFit="contain"
            layout="fill"
            alt="logo"
            placeholder="blur"
            blurDataURL="/logo.png"
          />
        </div>
        <p className="px-4 text-center font-out text-[#29470d]">
          We are a group of people with the diverse profession and having common
          interest in living off grid life
        </p>
        <Link href="/about">
          <a className="bg-[#ffca00] font-poppins mt-2 cursor-pointer hover:underline">
            More About Us
          </a>
        </Link>
      </div>
      <div
        className="w-full my-6 md:mt-10 text-center space-y-2 "
        id="categories"
      >
        <h2 className="font-out font-bold text-2xl mb-8 ">Categories</h2>
        {Array.from(categories).map((category) => (
          <div
            key={category}
            className="inline space-x-2 text-lg bg-[#ffca00] hover:underline  "
          >
            <Link href={`/category/${category}`}>
              <a className="text-center font-out"> {category}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
