import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ChildExpertImg from "../../assets/child-expert.svg";
import Paths from "../../constants/Paths";
import _ from "../../constants/Translations/Translations";
import Aos from "aos";
import 'aos/dist/aos.css'
const Child247 = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  const { ChildExpert, Heading, Text } = _.Home.Child247;
  return (
    <section className="Home-Child247" data-aos="fade-right">
      <div className="Home-Child247-Text">
        <h2>{Heading}</h2>
        <p>{Text}</p>
        <div className="action-button">
          <Link to={Paths.HowItWorks} className="easya-btn-nav">
           How It works
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
