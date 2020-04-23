import React from "react";
import { Link } from "react-router-dom";
import Paths from "../../Paths";

export default {
  SubjectsIntro: {
    Title: "We’ve got you covered.",
    SubjectsBannerImgAlt: "Banner",
    Text: (
      <>
        EasyA provides students with the highest quality learning experience
        possible. All of our super tutors have scored top grades in Maths
        A-level, with many studying Maths, Engineering and Natural Science
        degrees at the graduate or undergraduate level. Head over to our{" "}
        <Link to={Paths.About}>team page</Link> to find out more about who our
        tutors are. And some more great news! Although we started out providing
        GCSE and iGCSE maths help, due to high demand, we have expanded to
        include support for 11+ maths too. See below for just some of the topics
        our super tutors cover.
      </>
    )
  },
  Subjects: {
    SubjectContents: [
      {
        Title: "Basic Maths",
        Done: true,
        Contents: [
          "Negative Numbers: Four Operations",
          "Add and Subtract Fractions and Mixed Numbers",
          "Multiplication and Division of Fractions",
          "Negative Numbers: Four Operations",
          "Add and Subtract Fractions and Mixed Numbers",
          "Multiplication and Division of Fractions"
        ]
      },
      {
        Title: "Numbers",
        Done: false,
        Contents: [
          "Estimation and Significant Figures",
          "Basic Index Laws",
          "Fractional and Negative Index Laws",
          "Standard Form Calculation",
          "Surds: The Basics - Simplifying, Multiplying, Dividing",
          "Surds: Expanding Brackets",
          "Surds: Rationalising the Denominator"
        ]
      }
    ]
  }
};
