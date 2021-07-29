import React, { useEffect } from "react";
import FeaturedTutorsImg from "../../assets/featuredtutorsimg.png";
import TeacherSlider from "../Shared/Banners/TeacherSlider";
import _ from "../../constants/Translations/Translations";
import Aos from "aos";
import 'aos/dist/aos.css'
const AboutFeatTutors = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  const { FeaturedTutors } = _.About.AboutFeatTutors;
  return (
    <section className="About-FeatTutors"data-aos="fade-up-right">
      <img src={FeaturedTutorsImg} alt={FeaturedTutors} />
      <h2>{FeaturedTutors}</h2>
      <div className="About-FeatTutors-Slider easya-bgc-supernova">
        <TeacherSlider />
      </div>
      <span className="RoundIcon RoundIconRight" />
    </section>
  );
};

export default AboutFeatTutors;
