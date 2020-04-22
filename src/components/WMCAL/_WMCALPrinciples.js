import React from "react";
import { Link } from "react-router-dom";
import Paths from "../../constants/Paths";
import BasicPrinciples from "../Shared/Banners/BasicPrinciples";

const WMCALPrinciples = () => {
  return (
    <section className="TeachingMethods-Intro">
      <BasicPrinciples />
      <h2>Want to get to know our teaching method?</h2>
      <div className="action-button">
        <Link className="easya-btn-nav" to={Paths.TeachingMethods}>
          How We Teach
        </Link>
      </div>
    </section>
  );
};

export default WMCALPrinciples;
