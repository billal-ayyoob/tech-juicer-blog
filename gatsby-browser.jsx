import "./src/styles/global.css";

const React = require("require");
const Layout = require("./src/component/Layout");

exports.onRouteUpdate = ({ location, prevLocation }) =>{
    console.log("new pathname", location.pathname);
    console.log("old pathname", prevLocation ? prevLocation.pathname : null);
}

exports.wrapPageElement = ({ element, props }) =>{
    return <Layout {...props}>{element}</Layout>
}