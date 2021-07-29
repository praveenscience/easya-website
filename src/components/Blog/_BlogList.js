import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BlogPost from "./_BlogPost";
import ArrowRight from "../../assets/arrow-right.svg";
import Paths from "../../constants/Paths";
import { BlogPostsMapper } from "./BlogHelpers";
import _ from "../../constants/Translations/Translations";
import Aos from "aos";
import 'aos/dist/aos.css'
const BlogList = ({ Blogs }) => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  const BlogPosts = BlogPostsMapper(Blogs);
  const { Alt } = _.Blog.BlogList;
  return (
    <>
      <section className="Blog-List" data-aos="fade-up">
        {BlogPosts &&
          BlogPosts.map((bp, key) => <BlogPost key={key} {...bp} />)}
      </section>
      <p>
        <Link to={Paths.Blog}>
          Older Posts <img src={ArrowRight} alt={Alt} />
        </Link>
      </p>
    </>
  );
};

export default BlogList;
