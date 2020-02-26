import * as React from "react";

import Layout from "../components/layouts";
import { NextPage } from "next";
import ArticleCard from "../components/articles/articleCard";

const IndexPage: NextPage = () => {
  
  return (
    <>
      <Layout>
          <h1 className="bg-gray-100 -mb-10 inline-block px-3 rounded-full py-3 md:text-4xl text-2xl font-bold text-gray-700">Recent Posts</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mt-12 ">
          <ArticleCard />
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
