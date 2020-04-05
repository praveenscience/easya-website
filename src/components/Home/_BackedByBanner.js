import React from "react";
import BackedByPic from "../../assets/backedby.png";
import BackedInstitutes from "../../assets/backedinstitutes.png";

const BackedByBanner = () => {
  return (
    <div className="BackedByBanner">
      <div className="BackedByBanner-Image">
        <img src={BackedByPic} alt="Backed By" />
      </div>
      <div className="BackedByBanner-Text">
        <h2>EasyA is backed by the best institutes in education</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <img
        src={BackedInstitutes}
        className="BackedByBanner-OverlayImage Bottom"
        alt="Backed by Institutes"
      />
    </div>
  );
};

export default BackedByBanner;
