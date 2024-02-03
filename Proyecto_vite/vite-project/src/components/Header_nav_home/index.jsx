import React from "react"
import './styels.css'

const Cabecera = () => {

    return (
      <React.Fragment>

            <nav className="nav">
              <ul>
                <li><a href="">Buscar en tienda</a></li>
                <li><a href="">Ayuda</a></li>
                <li><a href="">Únete a la Familia</a></li>
                <li><a href="">Inicio de Sesión</a></li>
              </ul>
            </nav>
      </React.Fragment>
    )
}
export {Cabecera} ;
