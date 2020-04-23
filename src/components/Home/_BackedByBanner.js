import React from "react";
import BackedByPic from "../../assets/backedby.png";
import BackedInstitutes from "../../assets/backedinstitutes.png";
import _ from "../../constants/Translations/Translations";

const BackedByBanner = () => {
  const { BackedBy, Title, Text, BackedByInstitutes } = _.Home.BackedByBanner;
  return (
    <section className="BackedByBanner">
      <div className="BackedByBanner-Image">
        <img src={BackedByPic} alt={BackedBy} />
      </div>
      <div className="BackedByBanner-Text">
        <h2>{Title}</h2>
        <p>{Text}</p>
      </div>
      <img
        src={BackedInstitutes}
        className="BackedByBanner-OverlayImage Bottom"
        alt={BackedByInstitutes}
      />
    </section>
  );
};

export default BackedByBanner;
