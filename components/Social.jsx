import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
} from "next-share";
function Social(props) {
  const { postData } = props;
  return (
    <div className="space-x-1">
      <FacebookShareButton
        url={`https://enjoyoffgrid.com/${postData.slug}`}
        quote={`${postData.metaTitle}`}
        hashtag={"#www.enjoyoffgrid.com"}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={`https://enjoyoffgrid.com/${postData.slug}`}
        title={`${postData.metaTitle}`}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <PinterestShareButton
        url={`https://enjoyoffgrid.com/${postData.slug}`}
        media={`${postData.thumbnail}`}
      >
        <PinterestIcon size={32} round />
      </PinterestShareButton>
    </div>
  );
}

export default Social;
