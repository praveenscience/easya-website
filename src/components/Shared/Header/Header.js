import React from "react";
import Brand from "./_Brand";
import PrimaryNav from "./_PrimaryNav";
import Ham from "./_Ham";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-Wrapper">
        <Ham />
        <Brand />
        <PrimaryNav />
      </div>
    </div>
  );
};

export default Header;
