import React from "react";
import '.styels.css'

import React from "react";

const Cartlist = (props) =>{

    const children = props.children;

    return(

        <>
        <div>
            {children}
        </div>
        </>
    )
}
export {Cartlist}