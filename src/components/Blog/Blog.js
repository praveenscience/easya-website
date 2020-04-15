import React from "react";
import BlogList from "./_BlogList";
import BlogIntro from "./_BlogIntro";

const Blog = () => {
  return (
    <main className="Blog">
      <BlogIntro />
      <BlogList />
    </main>
  );
};

export default Blog;
