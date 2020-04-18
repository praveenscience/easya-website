import React, { useState } from "react";
import MobileHeaderMenu from "./_MobileHeaderMenu";

const Ham = ({ List }) => {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = e => {
    e.preventDefault();
    setMobileMenuOpen(!MobileMenuOpen);
  };
  return (
    <>
      <div
        className={"Header-Ham" + (MobileMenuOpen ? " Open" : "")}
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </div>
      {MobileMenuOpen && (
        <MobileHeaderMenu
          List={List}
          onClick={() => setMobileMenuOpen(!MobileMenuOpen)}
        />
      )}
    </>
  );
};

export default Ham;
