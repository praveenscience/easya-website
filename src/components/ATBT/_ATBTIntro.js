import React from "react";
import BackgroundBannerWithImage from "../Shared/Banners/BackgroundBannerWithImage";
import ATBTIntroImg from "../../assets/ATBTIntro.png";

const ATBTIntro = () => {
  return (
    <section className="ATBT-Intro">
      <BackgroundBannerWithImage className="About-Intro">
        <div className="About-Intro-Text">
          <h2>Opportunity is everywhere.</h2>
          <p>
            Make the most of your time by doing what you love with the best
            network of active riders.
          </p>
        </div>
        <div className="About-Intro-Image">
          <img src={ATBTIntroImg} alt="About Intro" />
        </div>
      </BackgroundBannerWithImage>
    </section>
  );
};

export default ATBTIntro;
