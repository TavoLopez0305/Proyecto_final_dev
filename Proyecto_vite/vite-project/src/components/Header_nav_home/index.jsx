import React from "react"
import '../Header_nav_home/styels.css'

const Cabecera = () => {

    return (
      <React.Fragment>
          <header className="head">
            <nav className="nav">
              <ul>
                <li><a href="">Buscar en tienda</a></li>
                <li><a href="">Ayuda</a></li>
                <li><a href="">Únete a la Familia</a></li>
                <li><a href="">Inicio de Sesión</a></li>
              </ul>
            </nav>
          </header>
      </React.Fragment>
    )
}
    export {Cabecera} ;
