import React from "react";
import FeaturedTutorsImg from "../../assets/featuredtutorsimg.png";

const AboutFeatTutors = () => {
  return (
    <section className="About-FeatTutors">
      <img src={FeaturedTutorsImg} alt="Featured Tutors" />
      <h2>Featured Tutors</h2>
      <div className="About-FeatTutors-Slider easya-bgc-supernova">
        Slider will be done once the website is converted into
        <br />
        static HTML &amp; CSS.
      </div>
      <span className="RoundIcon RoundIconRight" />
    </section>
  );
};

export default AboutFeatTutors;
