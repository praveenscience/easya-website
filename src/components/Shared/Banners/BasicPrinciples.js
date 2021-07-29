import React, { useEffect } from "react";
import BPImg1 from "../../../assets/BasicPrinciples-1.svg";
import BPImg2 from "../../../assets/BasicPrinciples-2.svg";
import BPImg3 from "../../../assets/BasicPrinciples-3.svg";
import Aos from "aos";
import 'aos/dist/aos.css'
const BasicPrinciples = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <section className="BasicPrinciples" data-aos="slide-right">
      <h2>All EasyA tutors follow 3 basic principles</h2>
      <ul>
        {[
          {
            Image: BPImg1,
            Title: "Explain, don't tell",
            Text:
              "All EasyA super tutors first explain the methodology before giving the student the answer."
          },
          {
            Image: BPImg2,
            Title: "Independent learning",
            Text:
              "EasyA super tutors encourage students to show what they've done to try get to the answer."
          },
          {
            Image: BPImg3,
            Title: "Ask questions",
            Text:
              "In order to make sure that students understand the material being taught to them."
          }
        ].map((p, key) => (
          <li key={key}>
            <img src={p.Image} alt={p.Title} />
            <h3>{p.Title}</h3>
            <p>{p.Text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BasicPrinciples;
