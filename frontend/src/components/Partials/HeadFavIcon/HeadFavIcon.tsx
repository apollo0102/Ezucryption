import { NextPage } from "next";
import Head from "next/head";
import React from "react";

interface HeadProps {
  title?: string;
  description?: string;
}

const HeadFavIcon: NextPage<HeadProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title ? title : "Artcryption"}</title>
      <meta
        name="description"
        content={
          description
            ? description
            : "Welcome to Artcryption. Sell, protect and share your NFTs, creative assets & IP online"
        }
      />
      <link rel="icon" href="/logo.svg" />
    </Head>
  );
};

export default HeadFavIcon;
