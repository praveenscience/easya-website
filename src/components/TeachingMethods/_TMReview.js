import React from "react";

const TMReview = ({
  Background,
  Title,
  Image,
  Text,
  Author,
  ParentRole,
  Place
}) => {
  return (
    <div className={"TeachingMethods-Reviews-Review " + Background}>
      <div className="TeachingMethods-Reviews-Review-Text">
        <h3>{Title}</h3>
        {Text && <p>{Text}</p>}
        <p className="Author">
          <strong>&mdash; {Author}</strong>
        </p>
        <p className="Meta">
          <span>{ParentRole}</span>
          <span>{Place}</span>
        </p>
      </div>
      {Image && (
        <div className="TeachingMethods-Reviews-Review-Image">
          <img src={Image} alt={Author} />
        </div>
      )}
    </div>
  );
};

export default TMReview;
