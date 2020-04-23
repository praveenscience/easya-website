import React from "react";
import LoadingSVG from "../../assets/Loading.svg";
import _ from "../../constants/Translations/Translations";

const BlogLoad = () => {
  const { LoadingAlt } = _.BlogDetails;
  return (
    <div className="BlogDetails-Loading">
      <img src={LoadingSVG} alt={LoadingAlt} />
    </div>
  );
};

export default BlogLoad;
