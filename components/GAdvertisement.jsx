import React from "react";
import { useEffect } from "react";

function GAdvertisement({ advertiseShow, advertiseNumber }) {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  let adN = [];

  if (advertiseShow == true) {
    for (let i = 0; i < advertiseNumber; i++) {
      adN.push(
        <ins
          key={i}
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-8098281641773267"
          data-ad-slot="2174125555"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      );
    }
  }

  return (
    <>
      {adN.map((e) => {
        return (
          <div className="my-2 w-full h-60 " key={e.key}>
            {e}
          </div>
        );
      })}
    </>
  );
}

export default GAdvertisement;
