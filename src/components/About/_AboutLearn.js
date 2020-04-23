import React from "react";
import BackgroundBannerWithImage from "../Shared/Banners/BackgroundBannerWithImage";
import AboutLearnAchieve from "../../assets/aboutlearnachieve.png";
import _ from "../../constants/Translations/Translations";

const AboutLearn = () => {
  const { AboutLearn, Title, Text } = _.About.AboutLearn;
  return (
    <BackgroundBannerWithImage className="About-Learn">
      <div className="About-Learn-Image">
        <img src={AboutLearnAchieve} alt={AboutLearn} />
      </div>
      <div className="About-Learn-Text">
        <h2>{Title}</h2>
        <p>{Text}</p>
      </div>
    </BackgroundBannerWithImage>
  );
};

export default AboutLearn;
