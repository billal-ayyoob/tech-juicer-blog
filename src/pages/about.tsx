import * as React from "react";
import { Link } from "gatsby";

//Page component which container all UI elements for page

export default () => {

  return (
      <div>
        <Link to="/">Back to Home</Link>
        <p>We can link pages in Gatsby by using Link</p>
      </div>
  );
}
