import React from "react";

import { Cabecera } from "../../components/Header_nav_home";
import { Navbar } from "../../components/nav"
import { Serch } from "../../components/serch_and_icons";

const Home =() =>{
    return(
        <>
         <Cabecera/>
      <nav className="Nav"> 
        <div><img src="/Multimedia/Gracias (1).png" alt="Logo" /></div>
        <Navbar/>
        <Serch/>
      </nav>
      <div className="main_box">
      <article className="Box_one">
        <div className="Novedades">
          <h2>Novedades</h2>
        </div>
        <div className="Novedades_img">
          <img src="" alt="Novedades-img" />
        </div>        
        <div className="Vendido">
          <h2>Lo mas vendido</h2>
        </div>        
        <div className="Vendido_img">
          <img src="" alt="Venido_img" />
        </div>
        <div className="Novedades">
          <h2>Nueva colección</h2>
        </div>
      </article>
      <article className="Box_two">
        <div>
          <h2>Descuentos</h2>
        </div>
        <div>
          <h2>Sale 30%</h2>
        </div>
        <div>
          <img src="" alt="Descuentos_img" />
        </div>
      </article>
      </div>
        </>
    )
}
export {Home}