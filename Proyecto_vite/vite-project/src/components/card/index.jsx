import React from "react";
import './styels.css'

const Card = ({name, img, precio}) => {
  
    return(
        <>
            <div className="card">
                <div className="box">
                    <img src={img} alt="" />
                    <p> {precio} </p>
                    <a href=""><i></i></a>
                </div>
                <div className="box_name">
                    <p> {name} </p>
                 </div>
            </div>
        </>
    )
}
export{Card}
