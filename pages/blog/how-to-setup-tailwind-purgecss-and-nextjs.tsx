import * as React from "react";
import { NextPage } from "next";

import BlogLayout from "../../components/layouts/blog";

// @ts-ignore
import MD from "../../posts/how-to-setup-tailwind-purgecss-and-nextjs/how-to-setup-tailwind-purgecss-and-nextjs.md";

const IndexPage: NextPage = () => {
  // window.scrollTo(0, 0);

  return (
    <>
      <BlogLayout title="Divine | Build a Progressive Web App with React.js">
        <MD />
      </BlogLayout>
    </>
  );
};

export default IndexPage;