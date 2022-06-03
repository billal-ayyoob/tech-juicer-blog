import React, { ReactNode } from "react";
import { type } from "os";

//Pre-buit component
import { Link } from "gatsby";

type LayoutProps = {
    children: ReactNode
}

export default function Layout({children}: LayoutProps) {
    return(
        <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
            <h1>Tech Juice Blog</h1>
            <Link to="/about/">About</Link>
            {children}
        </div>
    );

}