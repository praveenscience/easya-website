import React from "react";

const PricingMoreReasonsListItem = ({ Icon, Title, Text }) => {
  return (
    <div className="Pricing-MoreReasons-ListItem">
      <i className={"ReasonsIcon ReasonsIcon-" + Icon} />
      <div className="Pricing-MoreReasons-ListItem-Text">
        <h3>{Title}</h3>
        <p>{Text}</p>
      </div>
    </div>
  );
};

export default PricingMoreReasonsListItem;
