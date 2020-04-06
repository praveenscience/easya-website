import React from "react";

const HomeSubjectsItem = ({ Name, Icon, Colour }) => {
  return (
    <li className={"easya-bgc-hover-" + Colour}>
      <span className={"SubjectIcon SubjectIcon" + Icon} />
      <span>{Name}</span>
    </li>
  );
};

export default HomeSubjectsItem;
