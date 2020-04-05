import React from "react";

const Cols = [
  {
    Title: "Product",
    Links: [
      {
        Label: "How it works",
        Link: "#"
      },
      {
        Label: "Pricing",
        Link: "#"
      },
      {
        Label: "Subjects",
        Link: "#"
      },
      {
        Label: "Teaching Methods",
        Link: "#"
      },
      {
        Label: "Will my child learn?",
        Link: "#"
      }
    ]
  },
  {
    Title: "Company",
    Links: [
      {
        Label: "About us",
        Link: "#"
      },
      {
        Label: "Tutors",
        Link: "#"
      },
      {
        Label: "Testimonials",
        Link: "#"
      }
    ]
  },
  {
    Title: "Resources",
    Links: [
      {
        Label: "Blogs",
        Link: "#"
      },
      {
        Label: "Privacy Policies",
        Link: "#"
      },
      {
        Label: "Terms & Conditions",
        Link: "#"
      }
    ]
  }
];
const FooterColumns = () => {
  return (
    <section className="Footer-Columns">
      {Cols.map((col, key) => (
        <ul key={key}>
          <li>
            <h3>{col.Title}</h3>
          </li>
          {col.Links.map((l, k) => (
            <li key={k}>
              <a href={l.Link}>{l.Label}</a>
            </li>
          ))}
        </ul>
      ))}
    </section>
  );
};

export default FooterColumns;
