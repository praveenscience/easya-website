import React from "react";
import TMReview from "./_TMReview";
import { Link } from "react-router-dom";
import Paths from "../../constants/Paths";

const TMReviews = () => {
  const List = [
    {
      Background: "easya-bgc-trans-seance",
      Title: "EasyA has given my daughter so much confidence",
      Image: "https://i.imgur.com/sBK6crj.png",
      Text:
        "Evie's struggled with generally low confidence for years now. Using EasyA was our last-ditch attempt to break out of this vicious cycle. ",
      Author: "Jasmine E.",
      ParentRole: "Year 13 Mum",
      Place: "belgravia, london"
    },
    {
      Background: "easya-bgc-trans-tango",
      Title: "His first A in maths!",
      Image: null,
      Text:
        "I honestly couldn't believe my eyes when John brought home an A in Maths. It's always been his weakest subject by far, so I wasad to call the teacher to double check the grade was correct.",
      Author: "clarissa r.",
      ParentRole: "year 13 mum",
      Place: "barnes, london"
    },
    {
      Background: "easya-bgc-trans-supernova",
      Title:
        "I've been a parent for 20 years now, and I've never seen such knowledgeable tutors. ",
      Image: "https://i.imgur.com/ZzoR1mL.png",
      Text: "",
      Author: "patrick h.",
      ParentRole: "year 11 dad",
      Place: "kensington, london"
    },
    {
      Background: "easya-bgc-trans-tango",
      Title:
        "Love that my daughter has access 24/7. With school activities she isn’t always doing homework at conventional times. The tutors have all been beautifully great.",
      Image: "https://i.imgur.com/fMSLYWy.png",
      Text: "",
      Author: "arthur a.",
      ParentRole: "year 11 dad",
      Place: "kensington, london"
    },
    {
      Background: "easya-bgc-trans-supernova",
      Title: "His first A in maths!",
      Image: null,
      Text:
        "I honestly couldn't believe my eyes when John brought home an A in Maths. It's always been his weakest so I was truly shocked. I had to call the teacher to double check the grade was correct. ",
      Author: "clarissa r.",
      ParentRole: "year 13 mum",
      Place: "barnes, london"
    },
    {
      Background: "easya-bgc-trans-seance",
      Title: "EasyA has given my daughter so much confidence",
      Image: "https://i.imgur.com/N0g4ldU.png",
      Text:
        "Evie's struggled with generally low confidence for years now. Using EasyA was our last-ditch attempt to break out of this vicious cycle. ",
      Author: "jasmine e.",
      ParentRole: "year 13 mum",
      Place: "belgravia, london"
    }
  ];
  return (
    <>
      <section className="TeachingMethods-Reviews">
        <h2>Real EasyA reviews, real learning</h2>
        {List.map((review, key) => (
          <TMReview {...review} key={key} />
        ))}
      </section>
      <p className="TeachingMethods-ReadMore">
        <Link to={Paths.Testimonials}>Read More Reviews</Link>
      </p>
    </>
  );
};

export default TMReviews;
