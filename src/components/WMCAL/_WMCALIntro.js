import React from "react";
import _ from "../../constants/Translations/Translations";

const WMCALIntro = () => {
  const {
    Title,
    Text,
    Author,
    Designation,
    WMCALIntroAlt
  } = _.WMCAL.WMCALIntro;
  return (
    <section className="WMCAL-Intro">
      <div className="WMCAL-Intro-Text">
        <h2>{Title}</h2>
        <p className="author">
          <strong>{Author}</strong>
          {Designation}
        </p>
        <p>{Text}</p>
      </div>
      <div className="WMCAL-Intro-Image">
        <img src="https://i.imgur.com/4lt2Ckj.png" alt={WMCALIntroAlt} />
      </div>
    </section>
  );
};

export default WMCALIntro;
