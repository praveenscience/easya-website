import React from "react";
import { Link } from "react-router-dom";
import Paths from "../../constants/Paths";
import BackgroundBannerWithImage from "../Shared/Banners/BackgroundBannerWithImage";
import AboutCuriousBG from "../../assets/AboutCuriousBG.png";
import BeastImg from "../../assets/achievements/beast.svg";

const AboutCurious = () => {
  return (
    <BackgroundBannerWithImage
      Image={AboutCuriousBG}
      Position="Bottom Left"
      className="About-Curious easya-bgc-tango"
    >
      <img
        src={BeastImg}
        className="About-Curious-OverlayImage"
        alt="Achievements"
      />
      <h2>Curious about how we teach these topics?</h2>
      <div className="action-button">
        <Link to={Paths.About} className="easya-btn-banner">
          View Teaching methods
        </Link>
      </div>
    </BackgroundBannerWithImage>
  );
};

export default AboutCurious;
