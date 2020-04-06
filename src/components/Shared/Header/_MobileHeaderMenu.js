import React from "react";

const MobileHeaderMenu = ({ List }) => {
  return (
    <nav className="MobileHeaderMenu">
      <ul>
        {List &&
          List.map((link, key) => (
            <li key={key}>
              <a href={link.Path}>{link.Name}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default MobileHeaderMenu;
