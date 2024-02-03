import React from "react";
import './styels.css';



const Nav_and_filter = () => {
    return(
        <>
        <nav className="nav_categorias">
            <ul>
                <li><a href="">Running</a></li>
                <li><a href="">Gimnacio y Entrenamiento</a></li>
                <li><a href="">Tacos de Futbol</a></li>
                <li><a href="">Golf</a></li>
                <li><a href="">Basquetball</a></li>
                <li><a href="">Skate</a></li>
            </ul>
        </nav>
        <div className="box_filter">
            <a href="">
            <p>Filtrar</p>
          </a>
        </div>



        </>
    )
}
export {Nav_and_filter};

