import{useRoutes} from 'react-router-dom';

import { Home } from '../pages/Home';
import { Hombre } from "../pages/Hombre";
import { Mujer } from "../pages/Mujer";
import { Not_found } from "../pages/not_found";
import { Sneaker } from "../pages/Sneaker";
import { Novedades } from "../pages/Novedades";


const Routes = () =>{
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
        { path: "team", element:<AboutPAge/>}
      ]);
      return routes;
}
  export {Routes};