import React from "react";
import { Link } from "react-router-dom";
import Paths from "../../constants/Paths";
import _ from "../../constants/Translations/Translations";

const HomePlans = () => {
  const { Questions, Title, SeePlans } = _.Home.HomePlans;
  return (
    <section className="Home-Plans">
      <h2>{Title}</h2>
      <ul className="Home-Plans-List">
        {Questions.map((que, key) => (
          <li key={key}>
            <span className="RoundIcon RoundIconTick" />
            <p>{que}</p>
          </li>
        ))}
      </ul>
      <div className="action-button">
        <Link to={Paths.MonthlyPricing} className="easya-btn-nav">
          {SeePlans}
        </Link>
      </div>
    </section>
  );
};

export default HomePlans;
