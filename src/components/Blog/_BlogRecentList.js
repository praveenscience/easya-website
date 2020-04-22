import React from "react";
import Moment from "moment";
import { Link } from "react-router-dom";

const BlogRecentList = ({ BlogList }) => {
  return (
    <ul className="Blog-Intro-RecentList">
      {BlogList &&
        BlogList.map((item, key) => (
          <li key={key}>
            <p>
              <span>{key + 1}</span>
              <strong>&mdash; &nbsp; {item.Category}</strong>
            </p>
            <h3>
              <Link to={item.LinkTo}>{item.Title}</Link>
            </h3>
            <p className="date">{Moment(item.Date).format("DD.MM.YYYY")}</p>
          </li>
        ))}
    </ul>
  );
};

export default BlogRecentList;
