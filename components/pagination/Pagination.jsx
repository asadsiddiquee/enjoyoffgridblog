import Link from "next/link";
import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex  sm:text-xl space-x-3  justify-center flex-wrap ">
      <p>Page</p>
      {pageNumbers.map((number) => (
        <div key={number} className="cursor-pointer">
          <div
            onClick={() => paginate(number)}
            className={
              number == currentPage
                ? `text-cyan-900 underline hover:text-cyan-900 text-xl sm:text-2xl`
                : `text-cyan-400 underline hover:text-cyan-900`
            }
          >
            {number}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
