import React from "react";
import { Link } from "react-router-dom";

const Questions = [
  "Is your student enrolled in 3rd – 12th grade math?",
  "Does your student have access to a smartphone or tablet?",
  "Do you want your student to actually learn concepts for long-term math success?"
];
const HomePlans = () => {
  return (
    <section className="Home-Plans">
      <h2>Still wondering if EasyA is right for your family?</h2>
      <ul className="Home-Plans-List">
        {Questions.map((que, key) => (
          <li key={key}>
            <span className="RoundIcon RoundIconTick" />
            <p>{que}</p>
          </li>
        ))}
      </ul>
      <div className="action-button">
        <Link to="#" className="easya-btn-nav">
          See Plans
        </Link>
      </div>
    </section>
  );
};

export default HomePlans;
