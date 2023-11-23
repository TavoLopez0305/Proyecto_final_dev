import React from "react";
import '.styels.css';

const Nav_and_filter = () => {
    return(
        <>
        <div className="main_box">
        <nav className="nav_categorias">
            <ul>
                <li><a href="">Runing</a></li>
            </ul>
        </nav>
        <div className="box_filter">
            <a href="">
            <p>Filtrar</p>
            <i></i>
            </a>
        </div>
        </div>
        </>
    )
}
export {Nav_and_filter};