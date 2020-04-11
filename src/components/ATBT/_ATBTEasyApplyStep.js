import React from "react";

const ATBTEasyApplyStep = ({ Id, Title, Time, Text }) => {
  return (
    <div className="ATBT-EasyApply-Steps-Item">
      <div className="ATBT-EasyApply-Steps-Item-Index">{Id}</div>
      <h3>
        {Title}
        <br />
        {Time}
      </h3>
      <p>{Text}</p>
    </div>
  );
};

export default ATBTEasyApplyStep;
