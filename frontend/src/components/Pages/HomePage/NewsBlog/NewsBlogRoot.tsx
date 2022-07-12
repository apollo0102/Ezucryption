import React from "react";

import { blogData } from "../../../../../mockDb/blogDB";
import BlogCardSpinner from "../../../Partials/CarouselSpinner/BlogCardSpinner";

const NewsBlogRoot = () => {
  return (
    <div>
      <BlogCardSpinner
        data={blogData}
        alignTitle="flex-start"
        titleSize="2.1rem"
        title="NFT Pop-Ups, Drops & News"
        titleBottomMargin="1.5rem"
      />
    </div>
  );
};

export default NewsBlogRoot;
