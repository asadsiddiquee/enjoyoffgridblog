import Image from "next/image";
import Link from "next/link";
import React from "react";

const NextPrevPosts = ({ prevPost, nextPost, allPostData, index }) => {
  return (
    <div className="grid grid-cols-2 mt-5 py-4 gap-4 border-t-2">
      <div className={prevPost ? `grid grid-cols-1  text-center` : ` hidden`}>
        <div
          className={
            prevPost
              ? `text-cyan-700 inline-block text-center self-start underline font-bold sm:cursor-pointer font-out`
              : `text-slate-200 underline font-bold text-center`
          }
        >
          <Link href={prevPost ? `/${allPostData[index - 1].slug}` : ``}>
            <a>Previous Post</a>
          </Link>
        </div>

        {prevPost ? (
          <div className="flex flex-col justify-between">
            <div className="inline-block font-bold font-out text-sm sm:text-lg md:text-xl text-black mt-2 text-center sm:cursor-pointer">
              <Link href={prevPost ? `/${allPostData[index - 1].slug}` : ``}>
                <a>{allPostData[index - 1].title.toUpperCase()}</a>
              </Link>
            </div>

            <div>
              <Link href={prevPost ? `/${allPostData[index - 1].slug}` : ``}>
                <div className="relative w-full h-20 sm:h-36 md:h-56 lg:h-60 hover:opacity-80 delay-75 transition-all ease-in-out hover:backdrop-brightness-75 rounded-lg sm:cursor-pointer">
                  <Image
                    src={`${allPostData[index - 1].thumbnail}`}
                    layout="fill"
                    objectFit="cover"
                    alt={allPostData[index - 1].title}
                    placeholder="blur"
                    blurDataURL={`${allPostData[index - 1].thumbnail}`}
                  />
                </div>
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* -------------------------------------- */}
      <div className={nextPost ? `grid grid-cols-1 text-center ` : `hidden`}>
        <div
          className={
            nextPost
              ? `inline-block text-center self-start text-cyan-700 underline font-bold sm:cursor-pointer font-out`
              : `text-slate-200 underline font-bold text-center`
          }
        >
          <Link href={nextPost ? `/${allPostData[index + 1].slug}` : ``}>
            <a>Next Post</a>
          </Link>
        </div>
        {nextPost ? (
          <div className=" flex flex-col justify-between ">
            <div className="inline-block font-bold font-out text-sm sm:text-lg md:text-xl text-black mt-2 text-center cursor-pointer">
              <Link href={nextPost ? `/${allPostData[index + 1].slug}` : ``}>
                <a>{allPostData[index + 1].title.toUpperCase()}</a>
              </Link>
            </div>

            <div>
              <Link href={nextPost ? `/${allPostData[index + 1].slug}` : ``}>
                <div className="relative w-full h-20 sm:h-36 md:h-56 lg:h-60 sm:hover:opacity-80 delay-75 transition-all ease-in-out sm:hover:backdrop-brightness-75 rounded-lg sm:cursor-pointer">
                  <Image
                    src={`${allPostData[index + 1].thumbnail}`}
                    layout="fill"
                    objectFit="cover"
                    alt={allPostData[index + 1].title}
                    placeholder="blur"
                    blurDataURL={`${allPostData[index + 1].thumbnail}`}
                  />
                </div>
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NextPrevPosts;
