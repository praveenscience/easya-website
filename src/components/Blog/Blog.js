import React from "react";
import BlogList from "./_BlogList";
import BlogIntro from "./_BlogIntro";
import Scrolltop from "../Home/_scrolltop";
const Blog = () => {
  const [Blogs, setBlogs] = React.useState(null);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    fetch(
      "https://easya-blog.ghost.io/ghost/api/v3/content/posts/?key=d7b8fdfc693c73defc6f7bf301&include=tags,authors"
    )
      .then(res => res.json())
      .then(data => setBlogs(data.posts));
  }, []);
  return (
    <main className="Blog">
      <BlogIntro Blogs={Blogs} />
      <BlogList Blogs={Blogs} />
      <Scrolltop/>
    </main>
  );
};

export default Blog;
