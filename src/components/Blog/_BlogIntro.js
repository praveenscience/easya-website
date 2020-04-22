import React from "react";
import BlogFeatured from "./_BlogFeatured";
import BlogRecentList from "./_BlogRecentList";
import { FeaturedBlogMapper, BlogListMapper } from "./BlogHelpers";

const BlogIntro = ({ Blogs }) => {
  const IntroContent = {
    FeaturedBlog: FeaturedBlogMapper(Blogs && Blogs[0]),
    BlogList: BlogListMapper(Blogs)
  };
  return (
    <section className="Blog-Intro">
      <BlogFeatured {...IntroContent.FeaturedBlog} />
      <BlogRecentList BlogList={IntroContent.BlogList} />
    </section>
  );
};

export default BlogIntro;
