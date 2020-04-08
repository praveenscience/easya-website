import React from "react";
import AceTestWithEasyAImg from "../../../assets/AceTestWithEasyA.png";
import CheckImg from "../../../assets/check.png";

const AceTestWithEasyA = () => {
  return (
    <section className="AceTestWithEasyA">
      <h2>Ace your next test with the EasyA app</h2>
      <ul>
        {[
          "Ask Tutors using your phone",
          "Get 24/7 access",
          "Share transcripts with others"
        ].map((l, key) => (
          <li key={key}>
            <img src={CheckImg} alt="Check" /> {l}
          </li>
        ))}
      </ul>
      <img src={AceTestWithEasyAImg} alt="Ace Tests With EasyA" />
    </section>
  );
};

export default AceTestWithEasyA;
