import React from "react";
import '.styels.css'

const Card = (props) => {
  
    return(
        <>
        <div>
            <div><img src={props.img} alt="" /></div>
            <div>
                <p> {props.name } </p>
                <p> {props.precio} </p>
                <a href=""><i></i></a>
            </div>
        </div>
        </>
    )
}
export{Card}
