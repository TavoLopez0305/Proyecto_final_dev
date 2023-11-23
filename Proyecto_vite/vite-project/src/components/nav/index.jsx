import React from "react";
import '../nav/styels.css'

const Navbar = () => {

    return (
      <React.Fragment>
            <nav className="second-nav">
              <ul>
                <li><a href="">Hombre</a></li>
                <li><a href="">Mujer</a></li>
                <li><a href="">Novedades</a></li>
              </ul>
            </nav>
      </React.Fragment>
    )
}
    export {Navbar} ;