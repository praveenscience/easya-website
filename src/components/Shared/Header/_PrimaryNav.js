import React from "react";

const PrimaryNav = ({ List }) => {
  return (
    <nav className="Header-Nav">
      <ul>
        {List.map((item, key) => (
          <li key={key} className={item.Classes}>
            <a href={item.Path}>{item.Name}</a>
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
