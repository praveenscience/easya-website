import React from "react";
import { withRouter } from "react-router";

const BlogDetails = props => {
  return (
    <main className="BlogDetails">
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </main>
  );
};

export default withRouter(BlogDetails);
