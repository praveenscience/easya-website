import React from "react";
import Err404Img from "../../assets/error.svg";
import { Link } from "react-router-dom";
import Paths from "../../constants/Paths";

const Error404 = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="Error404">
      <h1>Oops!</h1>
      <p>Looks like the page is missing. Did someone tear it out?</p>
      <p>
        <img src={Err404Img} alt="" />
      </p>
      <p>
        Try heading over to our <Link to={Paths.Home}>homepage</Link>. You'll
        find everything you need if you start from there!
      </p>
    </section>
  );
};

export default Error404;
