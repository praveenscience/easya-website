import React from "react";
import BackgroundBannerWithImage from "../Shared/Banners/BackgroundBannerWithImage";
import AboutIntroChat from "../../assets/aboutintrochat.svg";
import _ from "../../constants/Translations/Translations";

const AboutIntro = () => {
  const { Title, Text, AboutIntroAlt } = _.About.AboutIntro;
  return (
    <BackgroundBannerWithImage className="About-Intro">
      <div className="About-Intro-Text">
        <h2>{Title}</h2>
        <p>{Text}</p>
      </div>
      <div className="About-Intro-Image">
        <img src={AboutIntroChat} alt={AboutIntroAlt} />
      </div>
    </BackgroundBannerWithImage>
  );
};

export default AboutIntro;
