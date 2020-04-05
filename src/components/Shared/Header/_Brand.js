import React from "react";
import Logo from "../../../assets/logo.png";

const Brand = () => {
  return (
    <h1 className="Header-Brand">
      <a href="./">
        <img src={Logo} alt="EasyA Logo" />
      </a>
    </h1>
  );
};

export default Brand;
