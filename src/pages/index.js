import { Link } from "gatsby";
import * as React from "react";
import Header from "../component/Header";
import Layout from "../component/Layout";

//Page component which container all UI elements for page

export default () => {

  return (
      <Layout pageTitle="Home">
          <Header text="This is a header" subtext="This is sub header"></Header>
          <p>We can link pages in Gatsby by using Link</p>
          <Link to="/my-dynamic-page/">Dynamically created page at build time</Link>
      </Layout>
  );
}