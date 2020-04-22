import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import HomeBannerImg from "../../assets/home-banner-mobile.png";
import HomeBannerSnap from "../../assets/Snap.svg";

const Rotator = [
  ["Snap", "Students open the app, click and ready to go"],
  ["Learn", "Students will learn with the app"],
  ["Connect", "Students can connect with the tutors"]
];
const HomeBanner = () => {
  return (
    <section className="Home-Banner">
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
        <img
          src={HomeBannerSnap}
          className="Home-Banner-Image-Snap"
          alt="Snap"
        />
        <div className="Home-Banner-Image-Slider">
          <Slider>
            {Rotator.map((slide, key) => (
              <div className="Home-Banner-Image-Slider-Slide" key={key}>
                <h3>{slide[0]}</h3>
                <p>{slide[1]}</p>
              </div>
            ))}
          </Slider>
        </div>
        <img src={HomeBannerImg} alt="Home Banner" />
      </div>
    </section>
  );
};

export default HomeBanner;
