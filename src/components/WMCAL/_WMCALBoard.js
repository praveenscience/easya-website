import React from "react";
import FeaturedTutorsImg from "../../assets/featuredtutorsimg.png";

const WMCALBoard = () => {
  return (
    <section className="WMCAL-Board">
      <img src={FeaturedTutorsImg} alt="Featured Tutors" />
      <h2>Academic Advisory Board</h2>
      <div className="WMCAL-Board-Slider easya-bgc-seance">
        Slider will be done once the website is converted into
        <br />
        static HTML &amp; CSS.
      </div>
      <span className="RoundIcon RoundIconRight" />
    </section>
  );
};

export default WMCALBoard;
