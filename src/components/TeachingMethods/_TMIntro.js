import React from "react";
import { Link } from "react-router-dom";
import BasicPrinciples from "../Shared/Banners/BasicPrinciples";
import Paths from "../../constants/Paths";

const TMIntro = () => {
  return (
    <section className="TeachingMethods-Intro">
      <h1>EasyA's revolutionary approach to learning</h1>
      <BasicPrinciples />
      <h2>Want to get to know our tutoring team?</h2>
      <div className="action-button">
        <Link class="easya-btn-nav" href={Paths.Home}>
          Meet Our Tutors
        </Link>
      </div>
    </section>
  );
};

export default TMIntro;
