import React from "react";
import { Link } from "react-router-dom";

const BlogPost = ({
  Image,
  Category,
  Time,
  Title,
  Excerpt,
  LinkTo,
  ShowReadNow
}) => {
  return (
    <div className="BlogPost">
      <img src={Image} alt={Title} />
      <div className="BlogPost-Content">
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
