import React from "react";
import LoadingSVG from "../../assets/Loading.svg";

const BlogLoad = () => {
  return (
    <div className="BlogDetails-Loading">
      <img src={LoadingSVG} alt="Loading Blog Post" />
    </div>
  );
};

export default BlogLoad;
