import React from "react";

const BDBanner = ({
  Title = "Hello",
  Image = "https://i.imgur.com/uf0FjlZ.png",
  Author = {
    Image: "https://i.imgur.com/ISuLzIi.png",
    Name: "Hello",
    Role: "Hello",
    Desc: "Hello"
  }
}) => {
  return (
    <section className="BlogDetails-Banner">
      <div className="BlogDetails-Banner-Wrap">
        <h1>{Title}</h1>
        <div className="BlogDetails-Banner-Meta">
          <div className="BlogDetails-Banner-Meta-Image">
            <img src={Image} alt={Title} />
          </div>
          <div className="BlogDetails-Banner-Meta-Author">
            <div className="BlogDetails-Banner-Meta-Author-Meta">
              <img src={Author.Image} alt={Author.Name} />
              <div className="BlogDetails-Banner-Meta-Author-Meta-Desc">
                <p>
                  <strong>{Author.Name}</strong>
                </p>
                <p>{Author.Role}</p>
              </div>
            </div>
            <p>{Author.Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BDBanner;
