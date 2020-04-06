import React from "react";
import { Link } from "react-router-dom";

const MobileHeaderMenu = ({ List }) => {
  return (
    <nav className="MobileHeaderMenu">
      <ul>
        {List &&
          List.map((link, key) => (
            <li key={key}>
              <Link to={link.Path}>{link.Name}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default MobileHeaderMenu;
