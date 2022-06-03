import "./src/styles/global.css";

import React from "react";
import Layout from "./src/component/Layout";

export const onRouteUpdate = ({ location, prevLocation }) =>{
    console.log("new pathname", location.pathname);
    console.log("old pathname", prevLocation ? prevLocation.pathname : null);
}

export const wrapPageElement = ({ element, props }) =>{
    return <Layout {...props}>{element}</Layout>
}