import React from "react";

const PrimaryNav = () => {
  const List = [
    {
      Name: "Features",
      Path: "/",
      Active: false,
      Classes: null
    },
    {
      Name: "Tutors",
      Path: "/",
      Active: false,
      Classes: null
    },
    {
      Name: "Pricing",
      Path: "/",
      Active: false,
      Classes: null
    },
    {
      Name: "Blog",
      Path: "/",
      Active: false,
      Classes: null
    },
    {
      Name: "Login",
      Path: "/",
      Active: false,
      Classes: "Header-Nav-Login"
    }
  ];
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
