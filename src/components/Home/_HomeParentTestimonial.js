import React from "react";
import BackgroundBannerWithImage from "../Shared/Banners/BackgroundBannerWithImage";
import HomeParentTestimonialBG from "../../assets/HomeParentTestimonialBG.png";
import HomeParentTestimonialImg from "../../assets/HomeParentTestimonialImg.png";

const HomeParentTestimonial = () => {
  return (
    <section className="Home-ParentTestimonial">
      <BackgroundBannerWithImage
        Image={HomeParentTestimonialBG}
        Position="Bottom Right"
        className="Home-ParentTestimonial-Banner easya-bgc-seance"
      >
        <div className="Home-ParentTestimonial-Banner-Image">
          <img src={HomeParentTestimonialImg} alt="Backed By" />
        </div>
        <div className="Home-ParentTestimonial-Banner-Text">
          <h2>
            “Yup tutors take the time to make sure my daughter understands
            concepts behind problems, in a way that is supportive and
            encouraging.”
          </h2>
          <p>- Maria, Mother</p>
        </div>
      </BackgroundBannerWithImage>
    </section>
  );
};

export default HomeParentTestimonial;
