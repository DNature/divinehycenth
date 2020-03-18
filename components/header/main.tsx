import * as React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import SocialIcons from "../SocialIcons";
import CustomLink from "../CustomLink";

const Main: NextPage = () => {
  const { pathname } = useRouter();

  return (
    <>
      <div className="pt-3 bg-gray-300 relative custom-bg pb-10">
        <header className="container z-10 mx-auto md:px-6 lg:px-12 p-2">
          <>
            <SocialIcons />
            <div className="h-full lg:mt-10 md:mt-10 text-center md:px-12 lg:px-20 px-0 lg:flex justify-between">
              <div>
                <h2 className="lg:text-5xl md:text-4xl text-2xl text-gray-200 custom-text">
                  Hey, I'm Divine.
              </h2>
                <h2 className="lg:text-2xl md:text-xl text-base text-white">
                  I'm a full stack software developer creating open source
                  projects and writing about modern JavaScript, Typescript,
                  Graphql, Python, Node.js, and development.
              </h2>
                <div className=" my-6 ">
                  <CustomLink
                    className="custom-button-transparent px-8 py-3 text-white hover:text-white hover:shadow-2xl rounded-md shadow-xl hover:border-blue-300 border"
                    href="/about"
                  >
                    About Me
                  {/* <span className="text-2xl"> &#10171;</span> */}
                  </CustomLink>
                </div>
              </div>
              <div className="hidden lg:grid content-center mx-6">
                <img src="/images/avatar.png" className="w-full" alt="Divine Hycenth"/>
              </div>
            </div>

            <div className="mt-12 h-auto">
              <CustomLink
                href={pathname === "/about" ? "/" : "/about"}
                className="px-2 text-base text-gray-300 hover:text-gray-100  font-sans pl-0"
              >
                {pathname === "/about" ? "Home" : "About"}
              </CustomLink>

              <CustomLink
                className="px-2 text-base text-gray-300 hover:text-gray-100  font-sans"
                href="/blog"
              >
                Articles
              </CustomLink>
              <CustomLink
                className="px-2 text-base text-gray-300 hover:text-gray-100  font-sans"
                href="/works"
              >
                Works
              </CustomLink>

              <CustomLink
                className="px-2 text-base text-gray-300 hover:text-gray-100  font-sans"
                href="/contact"
              >
                Contact
              </CustomLink>
            </div>
          </>
        </header>
      </div>
    </>
  );
};

export default Main;
