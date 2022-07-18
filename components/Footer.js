import Link from "next/link";
import React from "react";
import { current } from "tailwindcss/colors";

var today = new Date();
var yyyy = today.getFullYear();

function Footer() {
  return (
    <div className="container mx-auto my-5 text-center sm:text-xl font-out flex flex-col ">
      <p className="inline-block">
        Copyright - Enjoy Off Grid {yyyy} , All rights reserved
      </p>
    </div>
  );
}

export default Footer;
