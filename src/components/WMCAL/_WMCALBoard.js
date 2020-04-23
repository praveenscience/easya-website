import React from "react";
import FeaturedTutorsImg from "../../assets/featuredtutorsimg.png";
import TeacherSlider from "../Shared/Banners/TeacherSlider";
import _ from "../../constants/Translations/Translations";

const WMCALBoard = () => {
  const { WMCALBoardAlt, Title } = _.WMCAL.WMCALBoard;
  return (
    <section className="WMCAL-Board">
      <img src={FeaturedTutorsImg} alt={WMCALBoardAlt} />
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <h2>{Title}</h2>
      <div className="WMCAL-Board-Slider easya-bgc-seance">
        <TeacherSlider />
      </div>
      <span className="RoundIcon RoundIconRight" />
    </section>
  );
};

export default WMCALBoard;
