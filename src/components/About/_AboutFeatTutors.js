import React from "react";
import FeaturedTutorsImg from "../../assets/featuredtutorsimg.png";
import TeacherSlider from "../Shared/Banners/TeacherSlider";

const AboutFeatTutors = () => {
  return (
    <section className="About-FeatTutors">
      <img src={FeaturedTutorsImg} alt="Featured Tutors" />
      <h2>Featured Tutors</h2>
      <div className="About-FeatTutors-Slider easya-bgc-supernova">
        <TeacherSlider />
      </div>
      <span className="RoundIcon RoundIconRight" />
    </section>
  );
};

export default AboutFeatTutors;
