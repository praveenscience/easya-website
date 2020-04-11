import React from "react";
import Approach from "../../assets/HIW-3.png";

const WMCALApproach = () => {
  return (
    <section className="WMCAL-Approach">
      <div className="WMCAL-Approach-Text">
        <h2>EasyA’s innovative approach</h2>
        <p>
          EasyA super tutors are all trained to make sure students actually
          learn. Designed by current and former Cambridge and Oxford University
          students, EasyA's teaching methodology is built on years of extensive
          research. In conjunction with our top academics how they thought
          students learn as the basis for how tutors teach on our app.
        </p>
      </div>
      <div className="WMCAL-Approach-Image">
        <img src={Approach} alt="EasyA’s innovative approach" />
      </div>
    </section>
  );
};

export default WMCALApproach;
