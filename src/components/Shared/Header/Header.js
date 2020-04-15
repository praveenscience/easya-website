import React from "react";
import Paths from "../../../constants/Paths";
import Brand from "./_Brand";
import PrimaryNav from "./_PrimaryNav";
import Ham from "./_Ham";

/*
Display:
Just Desktop: 0
Both Desktop & Mobile: 1
Just Mobile: 2
*/
const List = [
  {
    Name: "About",
    Path: Paths.About,
    Active: false,
    Classes: null,
    Display: 2
  },
  {
    Name: "How it Works",
    Path: Paths.HowItWorks,
    Active: false,
    Classes: null,
    Display: 1
  },
  {
    Name: "Tutors",
    Path: Paths.ATBT,
    Active: false,
    Classes: null,
    Display: 1
  },
  {
    Name: "Pricing",
    Path: Paths.MonthlyPricing,
    Active: false,
    Classes: null,
    Display: 0
  },
  {
    Name: "Blog",
    Path: Paths.Blog,
    Active: false,
    Classes: null,
    Display: 1
  },
  {
    Name: "Login",
    Path: Paths.Home,
    Active: false,
    Classes: "Header-Nav-Login",
    Display: 0
  }
];
const Header = () => {
  return (
    <div className="Header">
      <div className="Header-Wrapper">
        <Ham List={List.filter(d => d.Display >= 1)} />
        <Brand />
        <PrimaryNav List={List.filter(d => d.Display <= 1)} />
      </div>
    </div>
  );
};

export default Header;
