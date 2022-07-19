import Link from "next/link";
import React from "react";
import { current } from "tailwindcss/colors";

var today = new Date();
var yyyy = today.getFullYear();

function Footer() {
  return (
    <div className="container mx-auto my-5 text-center sm:text-xl font-out flex flex-col ">
      <p className="inline-block">
        &copy;Enjoy Off Grid {yyyy}, All rights reserved
      </p>
      <div className="inline-block text-xs">
        <a href="/sitemap.xml">Sitemap</a>
      </div>
    </div>
  );
}

export default Footer;
