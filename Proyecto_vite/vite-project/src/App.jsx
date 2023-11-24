import React from "react";
import{Router, useRoutes} from 'react-router-dom';

import { Home } from './pages/Home';
import { Hombre } from "./pages/Hombre";
import { Mujer } from "./pages/Mujer";
import { Not_found } from "./pages/not_found";
import { Sneaker } from "./pages/Sneaker";
import { Novedades } from "./pages/Novedades";



function Routes (){
  const routes = useRoutes ([
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/Calzado_Hombre",
          element: <Hombre/>,
        },
        {
          path: "/Calzado_Mujer",
          element: <Mujer/>,
        },
        {
          path: "/Novedades",
          element: <Novedades/>,
        },
        {
          path: "/Skneaker",
          element: <Sneaker/>,
        },
        {
          path: "/*",
          element: <Not_found/>,
        },
      ]);
      return routes;
}
function App () {

  return (
    <>
      <Router>
        <nav style={{margin:10}}>
          <link to="/" style={{padding:5}}>Home</link>
          <link to="/Calzado_Hombre" style={{padding:5}}>Calzado Hombre</link>
          <link to="/Calzado_Mujer" style={{padding:5}}>Calzado Mujer</link>
          <link to="/Novedades" style={{padding:5}}>Novedades</link>
          <link to="/Skneaker" style={{padding:5}}>Skneaker</link>
          <link to="/*" style={{padding:5}}>NOT FOUND</link>
        </nav>
      <Routes />
      </Router>
    </>
  )
}

export default App;
