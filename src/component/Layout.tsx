import React, { ReactNode } from "react";
import { type } from "os";
import { container, heading } from "../pages/layout.module.css";
import NavItems from "./navigation";

//Pre-buit component
import { Link } from "gatsby";

type LayoutProps = {
    pageTitle: string,
    children: ReactNode
}

export default function Layout({ pageTitle, children}: LayoutProps) {
    return(
        <div className={container}>
            <title>{pageTitle}</title>
            <nav>
                <NavItems></NavItems>
            </nav>
            <main>
                <h1 className={ heading }>{pageTitle}</h1>
                {children}
            </main>
        </div>
    );

}