import React from "react";
import { Link } from "react-router-dom";
import ChildExpertImg from "../../assets/child-expert.svg";
import Paths from "../../constants/Paths";
import _ from "../../constants/Translations/Translations";

const Child247 = () => {
  const { ChildExpert, Heading, Text } = _.Home.Child247;
  return (
    <section className="Home-Child247">
      <div className="Home-Child247-Text">
        <h2>{Heading}</h2>
        <p>{Text}</p>
        <div className="action-button">
          <Link to={Paths.HowItWorks} className="easya-btn-nav">
            {_.HowItWorks.Title}
          </Link>
        </div>
      </div>
      <div className="Home-Child247-Image">
        <img src={ChildExpertImg} alt={ChildExpert} />
      </div>
    </section>
  );
};

export default Child247;
