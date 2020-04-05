import React from "react";
import Brand from "./_Brand";
import PrimaryNav from "./_PrimaryNav";
import Ham from "./_Ham";

const Header = () => {
  return (
    <div className="Header">
      <Ham />
      <Brand />
      <PrimaryNav />
    </div>
  );
};

export default Header;
