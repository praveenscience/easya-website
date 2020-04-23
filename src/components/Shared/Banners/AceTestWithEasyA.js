import React from "react";
import AceTestWithEasyAImg from "../../../assets/AceTestWithEasyA.png";
import CheckImg from "../../../assets/check.png";
import _ from "../../../constants/Translations/Translations";

const AceTestWithEasyA = () => {
  const { Title, Div, Alt } = _.AceTestWithEasyA.Ace;
  return (
    <section className="AceTestWithEasyA">
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
