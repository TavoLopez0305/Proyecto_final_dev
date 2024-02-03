import React from "react";
import '../nav/styels.css'
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
      <React.Fragment>
            <nav className="second-nav">
              <ul>
                <li><Link to="/Cabellero">Hombre</Link></li>
                <li><Link to="/Dama">Mujer</Link></li>
                <li><Link to="/Novedades">Novedades</Link></li>
              </ul>
            </nav>
      </React.Fragment>
    )
}
export {Navbar} ;