import React from "react";
import BlogFeatured from "./_BlogFeatured";
import BlogRecentList from "./_BlogRecentList";

const IntroContent = {
  FeaturedBlog: {
    Image: "https://i.imgur.com/75OYpg8.png",
    Category: "News",
    Time: 10,
    Title: "Myspace Layouts The Missing Element",
    Excerpt: null,
    LinkTo: "/blog/blog-new",
    ShowReadNow: false
  },
  BlogList: [
    {
      Category: "Student management",
      Title: "Remote tutor management Guide: Challenges and Solutions",
      LinkTo: "/blog/blog-new",
      Date: "21.7.2020"
    },
    {
      Category: "Student management",
      Title: "Remote tutor management Guide: Challenges and Solutions",
      LinkTo: "/blog/blog-new",
      Date: "21.7.2020"
    },
    {
      Category: "Student management",
      Title: "Remote tutor management Guide: Challenges and Solutions",
      LinkTo: "/blog/blog-new",
      Date: "21.7.2020"
    },
    {
      Category: "Student management",
      Title: "Remote tutor management Guide: Challenges and Solutions",
      LinkTo: "/blog/blog-new",
      Date: "21.7.2020"
    }
  ]
};
const BlogIntro = () => {
  return (
    <section className="Blog-Intro">
      <BlogFeatured {...IntroContent.FeaturedBlog} />
      <BlogRecentList BlogList={IntroContent.BlogList} />
    </section>
  );
};

export default BlogIntro;
