import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import _ from "../../constants/Translations/Translations";
import Aos from "aos";
import 'aos/dist/aos.css'
const BlogFeatured = ({
  Image,
  Category,
  Time,
  Title,
  LinkTo,
  ShowReadNow
}) => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  const { MinRead, ReadNow } = _.Blog.BlogFeatured;
  return (
    <div className="Blog-Intro-Featured" data-aos="flip-up">
      <img src={Image} alt={Title} />
      <div className="Blog-Intro-Featured-Meta">
        <p className="Meta">
          {Category}
          {Time && (
            <>
              <span>&middot;</span>
              {Time} {MinRead}
            </>
          )}
          {ShowReadNow && (
            <>
              <span>&middot;</span>
              <Link to={LinkTo}>{ReadNow}</Link>
            </>
          )}
        </p>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default BlogFeatured;
