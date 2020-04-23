import React from "react";
import { Link } from "react-router-dom";
import BasicPrinciples from "../Shared/Banners/BasicPrinciples";
import Paths from "../../constants/Paths";
import _ from "../../constants/Translations/Translations";

const TMIntro = () => {
  const {
    Title,
    BasicPrinciplesTitle,
    MeetOurTutors
  } = _.TeachingMethods.TMIntro;
  return (
    <section className="TeachingMethods-Intro">
      <h1>{Title}</h1>
      <BasicPrinciples />
      <h2>{BasicPrinciplesTitle}</h2>
      <div className="action-button">
        <Link className="easya-btn-nav" to={Paths.ATBT}>
          {MeetOurTutors}
        </Link>
      </div>
    </section>
  );
};

export default TMIntro;
