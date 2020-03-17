import * as React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { NextPage } from "next";

interface Props {
  description?: string;
  pageTitle?: string;
  imageUrl?: string;
  path?: string;
}

const NextHead: NextPage<Props> = ({
  pageTitle = "Divine Hycenth 👋 Full Stack Software Developer",
  description = "I'm Divine Hycenth a full stack software developer creating open source projects and writing about modern JavaScript, Typescript, Graphql, Python, Node.js, and development.",
  imageUrl="/images/avatar-small.png",
  path=""
}) => (
  <Head>
      {pageTitle ? (
        <title>{pageTitle}</title>
      ) : (
          <title>Divine Hycenth | Full Stack Software Developer Blog website</title>
        )}
    
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/icons/favicon.ico" />
    <link rel="icon" type="image/ico" href="/icons/favicon.ico" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/icons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/icons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/icons/favicon-16x16.png"
    />
    <link rel="manifest" href="/icons/site.webmanifest" />

    <meta name="yandex-verification" content="8caa5bda2d4a0bba" />

    <link rel="canonical" href="https://divinehycenth.com" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    {/* facebook */}
   
    
      <meta property="og:image" content={`https://divinehycenth.com${imageUrl}`} />
    <meta
      property="og:url"
      content={
        `https://divinehycenth.com${path}`
      }
    />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    {/* <meta name="theme-color" content="#15202b" /> */}
      <meta name="description" content={description} />
      <meta name="title" content={pageTitle} />
    <meta itemProp="name" content="Divine Hycenth" />
    <meta itemProp="description" content={description} />
    <meta property="twitter:title" content={pageTitle} />
    <meta name="twitter:description" content={description} />
    <meta property="twitter:url" content={`https://divinehycenth.com${path}`} />
      <meta name="twitter:site" content="https://twitter.com/DivineHycenth" />
      <meta name="twitter:creator" content="@DivineHycenth" />
      <meta property="twitter:card" content="summary_large_image" />
   
    <meta property="twitter:image" content={imageUrl} />

    {/* <meta property="og:determiner" content="software" /> */}
      <meta property="og:image" content={`https://divinehycenth.com${imageUrl}`}/>
    <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1000" />
      <meta property="og:image:height" content="532" />
    <meta property="og:site_name" content="Divine Hycenth" />
    <meta property="og:type" content="website" />

      <meta property="og:description" content={description} />
      <meta property="og:title" content={pageTitle} />

   
      {/* <meta property="og:image:secure_url" content={imageUrl} /> */}
      <meta property="og:image:secure_url" content={`https://www.divinehycenth.com${imageUrl}`} />
      <meta property="og:image:alt" content={description} />
   

    <link
      href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Satisfy&display=swap"
      rel="stylesheet"
    />

  </Head>
);

NextHead.propTypes = {
  pageTitle: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  path: PropTypes.string,
};

export default NextHead;
