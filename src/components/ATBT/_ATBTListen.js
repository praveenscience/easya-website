import React, { useEffect } from "react";
import TeacherSlider from "../Shared/Banners/TeacherSlider";
import _ from "../../constants/Translations/Translations";
import Aos from "aos";
import 'aos/dist/aos.css'
const SliderSettings = {
  arrows: true
};
const ATBTListen = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  const { Title } = _.ATBT.EasyListen;
  return (
    <section className="ATBT-Listen easya-bgc-trans-seance" data-aos="slide-right">
      <h2>{Title}</h2>
      <div className="ATBT-Listen-Slides">
        <TeacherSlider ExtraSettings={SliderSettings} />
      </div>
    </section>
  );
};

export default ATBTListen;
