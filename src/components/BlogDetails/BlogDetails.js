import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import BlogLoad from "./_BlogLoad";
import BDBanner from "./_BDBanner";
import BDContent from "./_BDContent";
import BDSuggestion from "../Blog/_BDSuggestion";
import { BlogDetailsMapper } from "../Blog/BlogHelpers";

const BlogDetails = ({ match }) => {
  const [BlogDetails, setBlogDetails] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    fetch(
      "https://easya-blog.ghost.io/ghost/api/v3/content/posts/?key=d7b8fdfc693c73defc6f7bf301&include=tags,authors"
    )
      .then(res => res.json())
      .then(Blogs => {
        fetch(
          "https://easya-blog.ghost.io/ghost/api/v3/content/posts/slug/" +
            match.params.blogId +
            "?key=d7b8fdfc693c73defc6f7bf301&include=tags,authors"
        )
          .then(res => res.json())
          .then(Blog => setBlogDetails(BlogDetailsMapper(Blog, Blogs.posts)));
      });
  }, [match.params.blogId]);
  return (
    <main className="BlogDetails">
      {BlogDetails ? (
        <>
          <BDBanner {...BlogDetails} />
          <BDContent {...BlogDetails} />
          <BDSuggestion {...BlogDetails} />
        </>
      ) : (
        <BlogLoad />
      )}
    </main>
  );
};

export default withRouter(BlogDetails);
