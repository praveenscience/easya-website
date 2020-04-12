import React from "react";

const PricingExpertTutorsListItem = ({ Image, Title, Text }) => {
  return (
    <div className="Pricing-ExpertTutors-List-Item">
      <img src={Image} alt={Title} />
      <div className="Pricing-ExpertTutors-List-Item-Text">
        <p>
          <strong>{Title}</strong>
        </p>
        <p>{Text}</p>
      </div>
    </div>
  );
};

export default PricingExpertTutorsListItem;
