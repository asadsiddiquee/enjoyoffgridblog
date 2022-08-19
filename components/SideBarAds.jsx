import React from "react";
import { useEffect } from "react";

function SideBarAds() {
  useEffect(() => {
    (adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  return (
    <div className="w-full">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8098281641773267"
        data-ad-slot="2174125555"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}

export default SideBarAds;
