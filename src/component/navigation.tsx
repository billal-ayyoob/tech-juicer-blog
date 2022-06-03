import React from "react";
import { Link } from "gatsby";
import { navLinks, navLinkItem, navLinkText } from "../pages/layout.module.css";

const navData = [
    {
        pageName: "Home",
        pageLink: "/"
    },
    {
        pageName: "About",
        pageLink: "/about/"
    }
]

export default () => {
    const listItems = navData.map((navItem) =>
    <li className={ navLinkItem }><Link to={navItem.pageLink} className={ navLinkText }>{navItem.pageName}</Link></li>
    );
    return(
        <ul className={ navLinks }>
            {listItems}
        </ul>
    );
}