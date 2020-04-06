import React from "react";

const SubjectBlock = ({ Title, Done, Contents }) => {
  return (
    <div className="Subjects-Block">
      <div className="Subjects-Block-Icon">
        <span
          className={
            "RoundIcon RoundIconMouse RoundIconMouse" +
            (Done ? "Green" : "Blue")
          }
        />
      </div>
      <div className="Subjects-Block-Content">
        <h3>{Title}</h3>
        <ul className="Subjects-Block-Content-List">
          {Contents.map((content, key) => (
            <li key={key}>
              <span className="RoundIcon RoundIconTick" />
              {content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubjectBlock;
