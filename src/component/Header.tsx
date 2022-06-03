import { type } from "os";
import React from "react";

//Type Alias for complicated types that we want to reuse into multiple places

type HeaderProps = {
    text: string,
    subtext?: string
}

//Destructuring: A shortcut for defining variables based on an object's properties 
//Page component which container all UI elements for page

export default ({text, subtext}: HeaderProps) => {
    return(
        <div>
            <h1>{text}</h1>
            <h3>{subtext}</h3>
        </div>
    );
}