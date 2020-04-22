import React from "react";
import BlogPost from "../Blog/_BlogPost";
import { FeaturedBlogMapper } from "../Blog/BlogHelpers";

const WMCALBlogs = () => {
  const [BlogPosts, setBlogPosts] = React.useState(null);
  React.useEffect(() => {
    fetch(
      "https://easya-blog.ghost.io/ghost/api/v3/content/posts/?key=d7b8fdfc693c73defc6f7bf301&include=tags,authors"
    )
      .then(res => res.json())
      .then(data => {
        data.posts = data.posts.reverse();
        data.posts.length = 3;
        setBlogPosts(data.posts.map(FeaturedBlogMapper));
      });
  }, []);
  return (
    <section className="WMCAL-Blogs">
      {BlogPosts && BlogPosts.map((bp, key) => <BlogPost key={key} {...bp} />)}
    </section>
  );
};

export default WMCALBlogs;
