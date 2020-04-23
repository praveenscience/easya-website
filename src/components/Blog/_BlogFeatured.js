import React from "react";
import { Link } from "react-router-dom";
import _ from "../../constants/Translations/Translations";

const BlogFeatured = ({
  Image,
  Category,
  Time,
  Title,
  LinkTo,
  ShowReadNow
}) => {
  const { MinRead, ReadNow } = _.Blog.BlogFeatured;
  return (
    <div className="Blog-Intro-Featured">
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
