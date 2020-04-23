import React from "react";
import { Link } from "react-router-dom";
import Paths from "../../constants/Paths";
import BasicPrinciples from "../Shared/Banners/BasicPrinciples";
import _ from "../../constants/Translations/Translations";

const WMCALPrinciples = () => {
  const { Title, HowWeTeach } = _.WMCAL.WMCALPrinciples;
  return (
    <section className="TeachingMethods-Intro">
      <BasicPrinciples />
      <h2>{Title}</h2>
      <div className="action-button">
        <Link className="easya-btn-nav" to={Paths.TeachingMethods}>
          {HowWeTeach}
        </Link>
      </div>
    </section>
  );
};

export default WMCALPrinciples;
