import React from "react";
import "./styels.css"
import logo from '../../Multimedia/Logo.jpeg'

import { Header } from "../../components/Header_nav_page";
const Not_found = () =>{
    return(
        <>
        <body className="body_non_found" >
            <header>
                <Header/>
            </header> 
            <main className="main">
                <p className="head"> 404 </p>
                <div className="img_content">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <aside className="footer">
                    <p className="non">Page not found</p>
                    <i></i>
                </aside>
                
            </main>
        </body>  
        </>
    )
}
export{Not_found};
