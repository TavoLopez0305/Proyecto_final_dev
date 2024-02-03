import React from "react";
import{Route, Routes} from 'react-router-dom';

import { Home } from "./pages/Home";
import { Hombre } from "./pages/Hombre";
import { Mujer } from "./pages/Mujer";
import { Not_found } from "./pages/not_found";
import { Sneaker } from "./pages/Sneaker";
import { Novedades } from "./pages/Novedades";


function App () {

  return (
    <>

      <Routes>
        <Route  path="/" element ={<Home/>} />
        <Route  path= "/Cabellero" element = {<Hombre/>} />
        <Route  path= "/Dama" element = {<Mujer/>} />
        <Route  path= "/Sneaker" element = {<Sneaker/>} />
        <Route  path= "/Novedades" element = {<Novedades/>} />
        <Route  path= "/*" element = {<Not_found/>} />

      </Routes>
    </>
  );
}

export default App;