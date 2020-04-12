import React from "react";

const PricingTrustedListItem = ({ Image, Name, Title, Text }) => {
  return (
    <div className="Pricing-Trusted-List-Item">
      <div className="Pricing-Trusted-List-Item-Meta">
        <img src={Image} alt={Name} />
        <div className="Pricing-Trusted-List-Item-Meta-Data">
          <p>
            <strong>{Name}</strong>
          </p>
          <p>{Title}</p>
        </div>
      </div>
      <div className="Pricing-Trusted-List-Item-Text">{Text}</div>
    </div>
  );
};

export default PricingTrustedListItem;
