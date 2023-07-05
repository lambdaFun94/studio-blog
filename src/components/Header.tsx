import { Link } from "@yext/pages/components";
import React from "react";

// interface MainProps {
//   children?: React.ReactNode;
// }

const Header = ({ url }) => {
  return (
    <div className="border-bottom flex w-full flex-col border p-4 md:flex-row md:items-center md:justify-between">
      <Link href={`${url}/index.html`}>
        <h1 className="text-3xl font-bold underline">NYC Blog</h1>
      </Link>
      <p className="text-sm md:text-base">Your guide to The Big Apple.</p>
    </div>
  );
};

export default Header;
