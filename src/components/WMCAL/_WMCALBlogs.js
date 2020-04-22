import React from "react";
import BlogPost from "../Blog/_BlogPost";

const BlogPosts = [
  {
    Image: "https://i.imgur.com/9VSywT9.png",
    Category: "Research Paper",
    Time: null,
    Title: "Director of Academics Kreg Moccia Discusses",
    Excerpt: null,
    LinkTo: "/blog/blog-new",
    ShowReadNow: true
  },
  {
    Image: "https://i.imgur.com/QbEQoky.png",
    Category: "Studies",
    Time: null,
    Title: "How We Built an Engaging Onboarding Process",
    Excerpt: null,
    LinkTo: "/blog/blog-new",
    ShowReadNow: true
  },
  {
    Image: "https://i.imgur.com/9mGyTrC.png",
    Category: "Research Paper",
    Time: null,
    Title: "EasyA’s innovative approach is here now!",
    Excerpt: null,
    LinkTo: "/blog/blog-new",
    ShowReadNow: true
  }
];
const WMCALBlogs = () => {
  return (
    <section className="WMCAL-Blogs">
      {BlogPosts.map((bp, key) => (
        <BlogPost key={key} {...bp} />
      ))}
    </section>
  );
};

export default WMCALBlogs;
