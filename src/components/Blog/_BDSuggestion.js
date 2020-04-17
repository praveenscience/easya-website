import React from "react";
import BlogPost from "./_BlogPost";

const BDSuggestion = ({ Suggestions }) => {
  return (
    <section className="BlogDetails-Suggestion">
      <h2>Some similar stories</h2>
      <div className="BlogDetails-Suggestion-List">
        {Suggestions.map((bp, key) => (
          <BlogPost key={key} {...bp} />
        ))}
      </div>
    </section>
  );
};

export default BDSuggestion;
