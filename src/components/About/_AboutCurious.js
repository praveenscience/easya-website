import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Paths from "../../constants/Paths";
import BackgroundBannerWithImage from "../Shared/Banners/BackgroundBannerWithImage";
import AboutCuriousBG from "../../assets/AboutCuriousBG.png";
import BeastImg from "../../assets/achievements/beast.svg";
import _ from "../../constants/Translations/Translations";
import Aos from "aos";
import 'aos/dist/aos.css'
const AboutCurious = ({ Image, Title, Action, ActionLink }) => {
  const { CurTitle, ViewTeachingMethods, Achievements } = _.About.AboutCurious;
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <BackgroundBannerWithImage
      Image={AboutCuriousBG}
      Position="Bottom Left"
      className="About-Curious easya-bgc-tango"
    >
      <img
        src={Image ? Image : BeastImg}
        className="About-Curious-OverlayImage"
        alt={Achievements}
      />
      <h2>{Title ? Title : CurTitle}</h2>
      <div className="action-button">
        <Link
          to={ActionLink ? ActionLink : Paths.TeachingMethods}
          className="easya-btn-banner"
        >
          {Action ? Action : ViewTeachingMethods}
        </Link>
      </div>
    </BackgroundBannerWithImage>
  );
};

export default AboutCurious;
