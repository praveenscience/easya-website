import React from "react";
import Markdown from "markdown-to-jsx";

const BDContent = ({ MarkDownContent }) => {
  return (
    <section className="BlogDetails-Content">
      {MarkDownContent && <Markdown>{MarkDownContent}</Markdown>}
    </section>
  );
};

export default BDContent;
