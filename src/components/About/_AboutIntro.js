import React from "react";
import BackgroundBannerWithImage from "../Shared/Banners/BackgroundBannerWithImage";
import AboutIntroChat from "../../assets/aboutintrochat.svg";

const AboutIntro = () => {
  return (
    <BackgroundBannerWithImage className="About-Intro">
      <div className="About-Intro-Text">
        <h2>We’re designing a new way of tutoring the next generation</h2>
        <p>
          EasyA gives students the freedom to quickly and easily learn and solve
          Math problems using student-tutor matching technology. From young
          early math learners to veteran calculus solvers, EasyA makes it easy
          for any student to grow.
        </p>
      </div>
      <div className="About-Intro-Image">
        <img src={AboutIntroChat} alt="About Intro" />
      </div>
    </BackgroundBannerWithImage>
  );
};

export default AboutIntro;
