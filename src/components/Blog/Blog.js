import React from "react";
import BlogList from "./_BlogList";
import BlogIntro from "./_BlogIntro";

const Blog = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="Blog">
      <BlogIntro />
      <BlogList />
    </main>
  );
};

export default Blog;
