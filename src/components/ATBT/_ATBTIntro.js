import React from "react";
import BackgroundBannerWithImage from "../Shared/Banners/BackgroundBannerWithImage";
import ATBTIntroImg from "../../assets/ATBTIntro.png";
import _ from "../../constants/Translations/Translations";

const ATBTIntro = () => {
  const { Title, Text, Snap } = _.ATBT.Intro;
  return (
    <section className="ATBT-Intro">
      <BackgroundBannerWithImage className="About-Intro">
        <div className="About-Intro-Text">
          <h2>{Title}</h2>
          <p>{Text}</p>
        </div>
        <div className="About-Intro-Image">
          <img src={ATBTIntroImg} alt={Snap} />
        </div>
      </BackgroundBannerWithImage>
    </section>
  );
};

export default ATBTIntro;
