import React from "react";
import HomeBannerBalloon from "../../assets/home-banner-balloon.png";
import HomeBannerMobile from "../../assets/home-banner-mobile.png";

const DummyLink = "#";
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
          <a href={DummyLink} className="easya-btn-banner">
            See Plans
          </a>
        </div>
      </div>
      <div className="Home-Banner-Image">
        <img
          src={HomeBannerBalloon}
          className="desktop-only"
          alt="Home Banner"
        />
        <img src={HomeBannerMobile} className="mobile-only" alt="Home Banner" />
      </div>
    </section>
  );
};

export default HomeBanner;
