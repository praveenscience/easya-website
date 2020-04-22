import React from "react";
import { Link, withRouter } from "react-router-dom";
import Paths from "../../../constants/Paths";

const PrimaryNav = ({ List, history }) => {
  return (
    <nav className="Header-Nav">
      <ul>
        {List.map((item, key) => (
          <li key={key} className={item.Classes}>
            <Link to={item.Path}>{item.Name}</Link>
          </li>
        ))}
        <li>
          <button
            className="easya-btn-nav"
            onClick={e => {
              history.push(Paths.MonthlyPricing);
            }}
          >
            Start for free
          </button>
        </li>
        <li className="download">
          <button className="easya-btn-nav">Download App</button>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(PrimaryNav);
