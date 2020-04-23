import React from "react";
import TMReview from "./_TMReview";
import { Link } from "react-router-dom";
import Paths from "../../constants/Paths";
import _ from "../../constants/Translations/Translations";

const TMReviews = () => {
  const { List, Title, ReadMoreReviews } = _.TeachingMethods.TMReviews;
  return (
    <>
      <section className="TeachingMethods-Reviews">
        <h2>{Title}</h2>
        {List.map((review, key) => (
          <TMReview {...review} key={key} />
        ))}
      </section>
      <p className="TeachingMethods-ReadMore">
        <Link to={Paths.Testimonials}>{ReadMoreReviews}</Link>
      </p>
    </>
  );
};

export default TMReviews;
