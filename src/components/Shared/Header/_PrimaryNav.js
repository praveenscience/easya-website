import React from "react";
import { Link } from "react-router-dom";

const PrimaryNav = ({ List }) => {
  return (
    <nav className="Header-Nav">
      <ul>
        {List.map((item, key) => (
          <li key={key} className={item.Classes}>
            <Link to={item.Path}>{item.Name}</Link>
          </li>
        ))}
        <li>
          <button className="easya-btn-nav">Start for free</button>
        </li>
        <li className="download">
          <button className="easya-btn-nav">Download App</button>
        </li>
      </ul>
    </nav>
  );
};

export default PrimaryNav;
