import * as React from "react";

//Building-block component
import Layout from "../component/Layout";


//Page component which container all UI elements for page

export default () => {

  return (
      <div>
          <Layout>
            <p>We can link pages in Gatsby by using Link</p>
          </Layout>
      </div>
  );
}
