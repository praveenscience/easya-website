import React from "react";
import TestimonialsBanner from "../../assets/TestimonialsBanner.svg";

const TestIntro = () => {
  return (
    <section className="Testimonials-Intro">
      <h1>Our students are doing amazing. Hear it from them.</h1>
      <img src={TestimonialsBanner} alt="Testimonials Intro" />
    </section>
  );
};

export default TestIntro;
