import React, { useEffect } from "react";
import BackgroundBannerWithImage from "../Shared/Banners/BackgroundBannerWithImage";
import ATBTIntroImg from "../../assets/ATBTIntro.png";
import _ from "../../constants/Translations/Translations";
import Aos from "aos";
import 'aos/dist/aos.css'
const ATBTIntro = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  const { Title, Text, Snap } = _.ATBT.Intro;
  return (
    <section className="ATBT-Intro" data-aos="flip-up">
      <BackgroundBannerWithImage className="About-Intro" data-aos="slide-up">
        <div className="About-Intro-Text" >
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
