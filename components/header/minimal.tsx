import * as React from "react";
import { NextPage } from "next";
import SocialIcons from "../SocialIcons";
import CustomLink from "../CustomLink";

const Minimal: NextPage = () => {
  return (
    <div className="custom-bg pt-5 bg-black relative">
      <header className="container  mx-auto md:px-10 lg:px-20 p-2">
        <>
          <SocialIcons />
          <div className="py-5">
            <CustomLink
              href="/"
              className="pr-2 text-gray-300 text-base hover:text-gray-100"
            >
              Home
            </CustomLink>
            <CustomLink
              className="px-2 text-gray-300 text-base hover:text-gray-100"
              href="/about"
            >
              About
            </CustomLink>

            <CustomLink
              className="px-2 text-gray-300 text-base hover:text-gray-100"
              href="/blog"
            >
              Articles
            </CustomLink>

            <CustomLink
              className="px-2 text-gray-300 text-base hover:text-gray-100"
              href="/contact"
            >
              Contact
            </CustomLink>
          </div>
        </>
      </header>
    </div>
  );
};

export default Minimal;
