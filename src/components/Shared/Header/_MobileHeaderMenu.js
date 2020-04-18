import React from "react";
import { Link } from "react-router-dom";

const MobileHeaderMenu = ({ List, onClick }) => {
  return (
    <nav className="MobileHeaderMenu">
      <ul>
        {List &&
          List.map((link, key) => (
            <li key={key}>
              <Link to={link.Path} onClick={onClick}>
                {link.Name}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default MobileHeaderMenu;
