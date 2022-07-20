import PostCard from "./PostCard";
import React from "react";
import Link from "next/link";

const PostHolder = ({ posts, headline, seeAllPostHidden, priority }) => {
  return (
    <div className=" sm:pb-5">
      <h2 className="font-out font-bold text-xl sm:text-2xl text-center py-2">
        {headline}
      </h2>
      <div className=" sm:justify-center sm:grid lg:grid-cols-2 xl:grid-cols-3">
        {posts?.map((post) => {
          return (
            <div key={`${post.slug}`} className="">
              <PostCard
                title={post.title}
                slug={post.slug}
                description={post.thumbDesc.substring(0, 200)}
                thumbnail={post.thumbnail}
                priority={priority}
              />
            </div>
          );
        })}
      </div>
      <div className={`text-center ${seeAllPostHidden}`}>
        <Link href={"/posts"}>
          <a className="text-lg font-out underline ">See All Posts</a>
        </Link>
      </div>
    </div>
  );
};

export default PostHolder;
