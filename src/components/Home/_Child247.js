import React from "react";
import ChildExpert from "../../assets/child-expert.svg";
const DummyLink = "#";

const Child247 = () => {
  return (
    <section className="Home-Child247">
      <div className="Home-Child247-Text">
        <h2>
          Give your child 24/7 unlimited access to expert tutors for a flat fee
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="action-button">
          <a href={DummyLink} className="easya-btn-nav">
            How it works
          </a>
        </div>
      </div>
      <div className="Home-Child247-Image">
        <img src={ChildExpert} alt="Child Expert" />
      </div>
    </section>
  );
};

export default Child247;
