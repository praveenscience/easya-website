import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
const BlogPost = ({
  Image,
  Category,
  Time,
  Title,
  Excerpt,
  LinkTo,
  ShowReadNow
}) => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className="BlogPost" data-aos="fade-up">
      <img src={Image} alt={Title} />
      <div className="BlogPost-Content" data-aos="fade-down">
        <p className="Meta">
          {Category}
          {Time && (
            <>
              <span>&middot;</span>
              {Time} min read
            </>
          )}
          {ShowReadNow && (
            <>
              <span>&middot;</span>
              <Link to={LinkTo}>Read Now</Link>
            </>
          )}
        </p>
        <h3>
          <Link to={LinkTo}>{Title}</Link>
        </h3>
        {Excerpt && <p>{Excerpt}</p>}
      </div>
    </div>
  );
};

export default BlogPost;
