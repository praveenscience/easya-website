import React from "react";
import { Link } from "react-router-dom";
import HomeBannerImg from "../../assets/home-banner-mobile.png";

const HomeBanner = () => {
  return (
    <section className="Home-Banner">
      <div className="Home-Banner-Text">
        <h1>
          Make
          <br /> math easy.
        </h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur
          <br /> adipiscing elit, sed do eiusmod
        </p>
        <div className="desktop-only">
          <p>Download mobile App</p>
        </div>
        <div className="action-button">
          <Link to="#" className="easya-btn-banner">
            See Plans
          </Link>
        </div>
      </div>
      <div className="Home-Banner-Image">
        <img src={HomeBannerImg} alt="Home Banner" />
      </div>
    </section>
  );
};

export default HomeBanner;
