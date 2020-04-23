import React from "react";
import TestimonialsBanner from "../../assets/TestimonialsBanner.svg";
import _ from "../../constants/Translations/Translations";

const TestIntro = () => {
  const { Title, TestimonialsBannerAlt } = _.Testimonials.TestIntro;
  return (
    <section className="Testimonials-Intro">
      <h1>{Title}</h1>
      <img src={TestimonialsBanner} alt={TestimonialsBannerAlt} />
    </section>
  );
};

export default TestIntro;
