import React from "react";
// import { Link } from "react-router-dom";
import ArticleContent from "./ArticleContent";
// import articles from "./ArticleContent";

// COmponents
import Articles from "../Components/Articles";

const ArticleList = () => {
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-grey-900">
        Articles
      </h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Articles articles={ArticleContent} />
        </div>
      </div>
    </>
  );
};

export default ArticleList;
