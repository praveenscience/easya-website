import React from "react";
import { Link } from "react-router-dom";
import AboutGPSBG from "../../assets/AboutGPSBG.png";
import Paths from "../../constants/Paths";
import _ from "../../constants/Translations/Translations";

const AboutGPS = () => {
  const { Title, Text, BecomeATutor, ChildExpert } = _.About.AboutGPS;
  return (
    <section className="About-GPS Home-Child247">
      <div className="Home-Child247-Text">
        <h2>{Title}</h2>
        <p>{Text}</p>
        <div className="action-button">
          <Link to={Paths.ATBT} className="easya-btn-nav">
            {BecomeATutor}
          </Link>
        </div>
      </div>
      <div className="Home-Child247-Image">
        <img src={AboutGPSBG} alt={ChildExpert} />
      </div>
    </section>
  );
};

export default AboutGPS;
