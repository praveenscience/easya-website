import React from "react";
import { Link } from "react-router-dom";
import HomeSubjectsItem from "./_HomeSubjectsItem";
import Paths from "../../constants/Paths";

const Subjects = [
  {
    Name: "Early Maths",
    Icon: "Early",
    Colour: "tango"
  },
  {
    Name: "Algebra and functions",
    Icon: "Algebra",
    Colour: "seance"
  },
  {
    Name: "Geometry",
    Icon: "Geometry",
    Colour: "supernova"
  },
  {
    Name: "Sequences and series",
    Icon: "Series",
    Colour: "tango"
  },
  {
    Name: "Stats and Probability",
    Icon: "Stats",
    Colour: "seance"
  },
  {
    Name: "Trigonometry",
    Icon: "Trigonometry",
    Colour: "supernova"
  },
  {
    Name: "Graphs",
    Icon: "Graphs",
    Colour: "tango"
  },
  {
    Name: "Integration",
    Icon: "Integration",
    Colour: "seance"
  },
  {
    Name: "Differentiation",
    Icon: "Differentiation",
    Colour: "supernova"
  }
];
const HomeSubjects = () => {
  return (
    <section className="Home-Subjects">
      <h2>
        EasyA's tutors are geniuses at Maths, from GCSE to A-level and beyond
      </h2>
      <ul className="Home-Subjects-List">
        {Subjects.map((sub, key) => (
          <HomeSubjectsItem key={key} {...sub} />
        ))}
      </ul>
      <p>
        EasyA currently teaches all Maths up to A-level further Maths. That
        includes GCSE and anything earlier than that!
      </p>
      <div className="action-button">
        <Link to={Paths.Subjects} className="easya-btn-nav">
          All Subjects
        </Link>
      </div>
    </section>
  );
};

export default HomeSubjects;
