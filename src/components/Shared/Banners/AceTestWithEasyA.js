import React, { useEffect } from "react";
import AceTestWithEasyAImg from "../../../assets/AceTestWithEasyA.png";
import CheckImg from "../../../assets/check.png";
import _ from "../../../constants/Translations/Translations";
import Aos from "aos";
import 'aos/dist/aos.css'
const AceTestWithEasyA = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  const { Title, Div, Alt } = _.AceTestWithEasyA.Ace;
  return (
    <section className="AceTestWithEasyA" data-aos="flip-right">
      <h2>{Title}</h2>
      <ul>
        {Div.map((l, key) => (
          <li key={key}>
            <img src={CheckImg} alt="Check" /> {l}
          </li>
        ))}
      </ul>
      <img src={AceTestWithEasyAImg} alt={Alt} />
    </section>
  );
};

export default AceTestWithEasyA;
