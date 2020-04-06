import React from "react";

const Subjects = () => {
  React.useEffect(() => {
    console.log("Loaded");
    window.scrollTo(0, 0);
  }, []);
  return <main className="Subjects"></main>;
};

export default Subjects;
