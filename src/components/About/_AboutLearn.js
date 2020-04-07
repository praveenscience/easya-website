import React from "react";
import BackgroundBannerWithImage from "../Shared/Banners/BackgroundBannerWithImage";
import AboutLearnAchieve from "../../assets/aboutlearnachieve.png";

const AboutLearn = () => {
  return (
    <BackgroundBannerWithImage className="About-Learn">
      <div className="About-Learn-Image">
        <img src={AboutLearnAchieve} alt="About Learn" />
      </div>
      <div className="About-Learn-Text">
        <h2>Making it easy to learn.</h2>
        <p>
          Thousands of forward thinking parents choose EasyA to empower their
          children. Our platform streamlines their doubts, solves their problem,
          and allows them to learn and grow.
        </p>
      </div>
    </BackgroundBannerWithImage>
  );
};

export default AboutLearn;
