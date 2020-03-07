import * as React from "react";
import { NextPage } from "next";

import BlogLayout from "../../components/layouts/blog";

// @ts-ignore
import MD from "../../posts/remove-all-unused-css/remove-all-unused-css.md";

const IndexPage: NextPage = () => {
  // window.scrollTo(0, 0);

  return (
    <>
      <BlogLayout
        description="A reference guide on how to remove unused CSS selectors, Minify CSS files to reduce your website's loading time"
        title="Divine | Build a Progressive Web App with React.js"
      >
        <MD />
      </BlogLayout>
    </>
  );
};

export default IndexPage;
