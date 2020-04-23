import React from "react";
import ATBTEasyApplyStep from "./_ATBTEasyApplyStep";
import _ from "../../constants/Translations/Translations";

const ATBTEasyApply = () => {
  const { Title, Steps } = _.ATBT.EasyApply;
  return (
    <section className="ATBT-EasyApply">
      <h2>{Title}</h2>
      <div className="ATBT-EasyApply-Steps">
        {Steps.map((step, key) => (
          <ATBTEasyApplyStep key={key} {...{ ...step, Id: key + 1 }} />
        ))}
      </div>
    </section>
  );
};

export default ATBTEasyApply;
