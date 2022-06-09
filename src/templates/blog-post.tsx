import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default ({ pageContext }) => {
    return (
        <div>
            <div>{pageContext.title}</div>
            <div>{documentToReactComponents(pageContext.body.json)}</div>
        </div>
    );
}