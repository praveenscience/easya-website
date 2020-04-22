import React from "react";
import { Link } from "react-router-dom";
import AboutGPSBG from "../../assets/AboutGPSBG.png";
import Paths from "../../constants/Paths";

const AboutGPS = () => {
  return (
    <section className="About-GPS Home-Child247">
      <div className="Home-Child247-Text">
        <h2>You think you’re a great Problem solver?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="action-button">
          <Link to={Paths.ATBT} className="easya-btn-nav">
            Become a Tutor
          </Link>
        </div>
      </div>
      <div className="Home-Child247-Image">
        <img src={AboutGPSBG} alt="Child Expert" />
      </div>
    </section>
  );
};

export default AboutGPS;
