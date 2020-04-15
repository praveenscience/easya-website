import React from "react";
import BlogPost from "./_BlogPost";
import ArrowRight from "../../assets/arrow-right.svg";
import { Link } from "react-router-dom";

const BlogPosts = [
  {
    Image: "https://i.imgur.com/G7baylS.png",
    Category: "Research Paper",
    Time: 10,
    Title: "Director of Academics Kreg Moccia Discusses",
    Excerpt:
      "The best way to foster a connection and inspire loyalty? A thoughtful and comprehensive onboarding experience.",
    LinkTo: "/",
    ShowReadNow: false
  },
  {
    Image: "https://i.imgur.com/f4e9GnH.png",
    Category: "Studies",
    Time: 10,
    Title: "How We Built an Engaging Onboarding Process",
    Excerpt:
      "The best way to foster a connection and inspire loyalty? A thoughtful and comprehensive onboarding experience.",
    LinkTo: "/",
    ShowReadNow: false
  },
  {
    Image: "https://i.imgur.com/Q8YAmn0.png",
    Category: "Research Paper",
    Time: 10,
    Title: "EasyA’s innovative approach",
    Excerpt:
      "The best way to foster a connection and inspire loyalty? A thoughtful and comprehensive onboarding experience.",
    LinkTo: "/",
    ShowReadNow: false
  },
  {
    Image: "https://i.imgur.com/G7baylS.png",
    Category: "Research Paper",
    Time: 10,
    Title: "Director of Academics Kreg Moccia Discusses",
    Excerpt:
      "The best way to foster a connection and inspire loyalty? A thoughtful and comprehensive onboarding experience.",
    LinkTo: "/",
    ShowReadNow: false
  },
  {
    Image: "https://i.imgur.com/f4e9GnH.png",
    Category: "Studies",
    Time: 10,
    Title: "How We Built an Engaging Onboarding Process",
    Excerpt:
      "The best way to foster a connection and inspire loyalty? A thoughtful and comprehensive onboarding experience.",
    LinkTo: "/",
    ShowReadNow: false
  },
  {
    Image: "https://i.imgur.com/Q8YAmn0.png",
    Category: "Research Paper",
    Time: 10,
    Title: "EasyA’s innovative approach",
    Excerpt:
      "The best way to foster a connection and inspire loyalty? A thoughtful and comprehensive onboarding experience.",
    LinkTo: "/",
    ShowReadNow: false
  }
];
const BlogList = () => {
  return (
    <>
      <section className="Blog-List">
        {BlogPosts.map((bp, key) => (
          <BlogPost key={key} {...bp} />
        ))}
      </section>
      <p>
        <Link to="/">
          Older Posts <img src={ArrowRight} alt="Older Posts" />
        </Link>
      </p>
    </>
  );
};

export default BlogList;
