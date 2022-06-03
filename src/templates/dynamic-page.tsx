import React from "react";

export default ({pageContext}) => {
    return (
        <div>
            <div>Hello Dynamic page from {pageContext.name}</div>
            <div>This page is created dynamically at build time</div>
        </div>
    );
}