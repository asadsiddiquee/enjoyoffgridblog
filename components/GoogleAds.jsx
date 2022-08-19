import React from "react";
import { useEffect } from "react";

async function GoogleAds(adId) {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  return (
    <div className="w-full">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8098281641773267"
        data-ad-slot={adId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}

export default GoogleAds;
