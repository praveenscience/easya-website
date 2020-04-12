import React from "react";
import Check from "../../assets/check-trans.png";

const PricingIntroPlanListItem = ({
  BestValue,
  Title,
  Text,
  PricePer,
  Sessions,
  ListTitle,
  List
}) => {
  return (
    <div
      className={
        "Pricing-Intro-PlanList-Item" + (BestValue ? " BestValue" : "")
      }
    >
      {BestValue && <div className="BestValue-Banner">Best value</div>}
      <div className="easya-bgc-white">
        <h3>{Title}</h3>
        <p>{Text}</p>
        <h4>{PricePer}</h4>
        <p>{Sessions}</p>
        <button>Add to cart</button>
      </div>
      <div className="Pricing-Intro-PlanList-Item-Features">
        {ListTitle && <p>{ListTitle}</p>}
        <ul>
          {List &&
            List.map((item, key) => (
              <li key={key}>
                <img src={Check} alt="Check" /> {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingIntroPlanListItem;
