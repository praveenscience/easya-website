import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import BlogLoad from "./_BlogLoad";
import BDBanner from "./_BDBanner";

const BlogDetails = ({ match }) => {
  const [BlogDetails, setBlogDetails] = useState(null);
  useEffect(() => {
    fetch("/api/blog.json?blogId=" + match.params.blogId)
      .then(res => res.json())
      .then(data => setBlogDetails(data));
  }, [match.params.blogId]);
  return (
    <main className="BlogDetails">
      {BlogDetails ? (
        <>
          <BDBanner {...BlogDetails} />
        </>
      ) : (
        <BlogLoad />
      )}
    </main>
  );
};

export default withRouter(BlogDetails);
