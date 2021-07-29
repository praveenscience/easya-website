import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import HomeBannerImg from "../../assets/home-banner-mobile.png";
import HomeBannerSnap from "../../assets/Snap.svg";
import Paths from "../../constants/Paths";
import _ from "../../constants/Translations/Translations";
import Aos from "aos";
import 'aos/dist/aos.css'
const HomeBanner = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  const {
    Rotator,
    Title,
    Text,
    DownloadMobApp,
    SeePlans,
    Snap,
    TitleText
  } = _.Home.HomeBanner;
  return (
    <section className="Home-Banner" data-aos="fade-right">
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
        <h1>{Title}</h1>
        <p className="lead">{Text}</p>
        <div className="desktop-only">
          <p>{DownloadMobApp}</p>
        </div>
        <div className="action-button">
          <Link to={Paths.MonthlyPricing} className="easya-btn-banner">
            {SeePlans}
          </Link>
        </div>
      </div>
      <div className="Home-Banner-Image">
        <img
          src={HomeBannerSnap}
          className="Home-Banner-Image-Snap"
          alt={Snap}
        />
        <div className="Home-Banner-Image-Slider">
          <Slider>
            {Rotator &&
              Rotator.map((slide, key) => (
                <div className="Home-Banner-Image-Slider-Slide" key={key}>
                  <h3>{slide[0]}</h3>
                  <p>{slide[1]}</p>
                </div>
              ))}
          </Slider>
        </div>
        <img src={HomeBannerImg} alt={TitleText} />
      </div>
    </section>
  );
};

export default HomeBanner;
