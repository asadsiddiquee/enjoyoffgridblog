import React, { useEffect } from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  function Scroll() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
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
            onClick={() => {
              paginate(number);
              Scroll();
            }}
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
