import React from "react"
import { Link } from "react-router-dom";
import './styels.css'


function Header(){


    return (
      <React.Fragment>

            <nav className="Main-nav" >
            <ul className="Block-one">
              <li><a href=""><Link to="/Cabellero">Hombre</Link></a></li>
              <li className="unic"><a href=""><Link to="/Dama">Mujer</Link></a></li>
              <li className="unic"><a href=""><Link to="/Novedades">Novedades</Link></a></li>
              </ul>
              <ul className="Block-two">
                <li className="unic"><a href="">Buscar en tienda</a></li>
                <li className="unic"><a href="">Ayuda</a></li>
                <li className="unic"><a href="">Únete a la Familia</a></li>
                <li><a href="">Inicio de Sesión</a></li>
              </ul>
              
            </nav>
      </React.Fragment>
    )
}
export {Header};
