import React from "react";
import Approach from "../../assets/HIW-3.png";
import _ from "../../constants/Translations/Translations";

const WMCALApproach = () => {
  const { Title, Text, EasyAsInnovativeApproachAlt } = _.WMCAL.WMCALApproach;
  return (
    <section className="WMCAL-Approach">
      <div className="WMCAL-Approach-Text">
        <h2>{Title}</h2>
        <p>{Text}</p>
      </div>
      <div className="WMCAL-Approach-Image">
        <img src={Approach} alt={EasyAsInnovativeApproachAlt} />
      </div>
    </section>
  );
};

export default WMCALApproach;
