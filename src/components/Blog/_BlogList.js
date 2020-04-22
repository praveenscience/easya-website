import React from "react";
import { Link } from "react-router-dom";
import BlogPost from "./_BlogPost";
import ArrowRight from "../../assets/arrow-right.svg";
import Paths from "../../constants/Paths";
import { BlogPostsMapper } from "./BlogHelpers";

const BlogList = ({ Blogs }) => {
  const BlogPosts = BlogPostsMapper(Blogs);
  return (
    <>
      <section className="Blog-List">
        {BlogPosts &&
          BlogPosts.map((bp, key) => <BlogPost key={key} {...bp} />)}
      </section>
      <p>
        <Link to={Paths.Blog}>
          Older Posts <img src={ArrowRight} alt="Older Posts" />
        </Link>
      </p>
    </>
  );
};

export default BlogList;
