import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import PostHolder from "../post section/PostHolder";

function PaginationPost(props) {
  const { allPostsData } = props;
  const [posts, setPosts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(
    props.numberOfPostsToShowPerPage
  );

  useEffect(() => {
    setPosts(allPostsData);
  }, []);

  //   get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //   change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <PostHolder
        posts={currentPosts}
        headline={props.headline}
        seeAllPostHidden={props.seeAllPostHidden}
      />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default PaginationPost;
