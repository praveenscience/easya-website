import React from "react";
import BackgroundBannerWithImage from "../Shared/Banners/BackgroundBannerWithImage";
import HomeParentTestimonialBG from "../../assets/HomeParentTestimonialBG.png";
import HomeParentTestimonialImg from "../../assets/HomeParentTestimonialImg.png";
import _ from "../../constants/Translations/Translations";

const HomeParentTestimonial = () => {
  const { Parent, ParentText, ParentName } = _.Home.HomeParentTestimonial;
  return (
    <section className="Home-ParentTestimonial">
      <BackgroundBannerWithImage
        Image={HomeParentTestimonialBG}
        Position="Bottom Right"
        className="Home-ParentTestimonial-Banner easya-bgc-seance"
      >
        <div className="Home-ParentTestimonial-Banner-Image">
          <img src={HomeParentTestimonialImg} alt={Parent} />
        </div>
        <div className="Home-ParentTestimonial-Banner-Text">
          <h2>{ParentText}</h2>
          <p>{ParentName}</p>
        </div>
      </BackgroundBannerWithImage>
    </section>
  );
};

export default HomeParentTestimonial;
