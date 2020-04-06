import React from "react";
import { Link } from "react-router-dom";
import Paths from "../../../constants/Paths";
import Logo from "../../../assets/logo.png";

const Brand = () => {
  return (
    <h1 className="Header-Brand">
      <Link to={Paths.Home}>
        <img src={Logo} alt="EasyA Logo" />
      </Link>
    </h1>
  );
};

export default Brand;
