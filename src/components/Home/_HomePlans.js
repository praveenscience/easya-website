import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Paths from "../../constants/Paths";
import _ from "../../constants/Translations/Translations";
import Aos from "aos";
import 'aos/dist/aos.css'
const HomePlans = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  const { Questions, Title, SeePlans } = _.Home.HomePlans;
  return (
    <section className="Home-Plans" data-aos="fade-down">
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
