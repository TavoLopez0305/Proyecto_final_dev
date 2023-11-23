import React from "react";
import {Cabecera} from "./components/Header_nav_home";
import { Navbar } from "./components/nav";
import { Serch } from "./components/serch_and_icons";
import { Title } from "./components/title";


const App = () =>  {

  return (
    <>
      <Cabecera/>
      <Navbar/>
      <Serch/>
      <Title/>
    </>
  )
}

export default App;
