import * as React from "react";
import Header from "../component/Header";
import Layout from "../component/Layout";


//Page component which container all UI elements for page

export default () => {

  return (
    <div>
      <Layout>
        <Header text="This is a header" subtext="This is sub header"></Header>
        <p>We can link pages in Gatsby by using Link</p>
    </Layout>
    </div>
  );
}