import * as React from "react";
import { Link } from "gatsby";
import Layout from "../component/Layout";

//Page component which container all UI elements for page

export default () => {

  return (
      <Layout pageTitle="About us">
          <Link to="/">Back to Home</Link>
          <p>We can link pages in Gatsby by using Link</p>
      </Layout>
  );
}
