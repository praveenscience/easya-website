import React from "react";
import BlogPost from "./_BlogPost";

const BDSuggestion = ({ Suggestions }) => {
  return Suggestions ? (
    <section className="BlogDetails-Suggestion">
      <h2>Some similar stories</h2>
      <div className="BlogDetails-Suggestion-List">
        {Suggestions &&
          Suggestions.map((bp, key) => <BlogPost key={key} {...bp} />)}
      </div>
    </section>
  ) : null;
};

export default BDSuggestion;
