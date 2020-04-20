import React from "react";
import Slider from "react-slick";
import FeaturedTutorsImg from "../../assets/featuredtutorsimg.png";
import TeacherSlider from "../Shared/Banners/TeacherSlider";

const WMCALBoard = () => {
  return (
    <section className="WMCAL-Board">
      <img src={FeaturedTutorsImg} alt="Featured Tutors" />
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <h2>Academic Advisory Board</h2>
      <div className="WMCAL-Board-Slider easya-bgc-seance">
        <TeacherSlider />
      </div>
      <span className="RoundIcon RoundIconRight" />
    </section>
  );
};

export default WMCALBoard;
