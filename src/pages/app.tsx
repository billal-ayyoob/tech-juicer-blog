import React from "react";
import { Router } from "@reach/router";
import Layout from "../component/Layout";
import ClientPage1 from "../component/Client1";
import Default from "../component/DefaultClient";

const App = () => {
    return(
        <Layout pageTitle="App">
            <Router basepath="/app">
                <ClientPage1 path="/page1" />
                <Default path="/" />
            </Router>
        </Layout>
    );
}

export default App;