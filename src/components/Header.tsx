import { Link } from "@yext/pages/components";
import React from "react";

// interface MainProps {
//   children?: React.ReactNode;
// }

const Header = ({ url }) => {
  return (
    <div className="w-full border border-bottom p-4 flex flex-col md:flex-row md:justify-between md:items-center">
        <Link href={`${url}/index.html`}>
            <h1 className="font-bold text-3xl underline">NYC Blog</h1>
        </Link>
        <p className="text-sm md:text-base">Your guide to The Big Apple.</p>
    </div>
  );
};

export default Header;