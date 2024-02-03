import React from "react";
import './styels.css'

import {Header} from "../../components/Header_nav_page";
import { Title } from "../../components/title";
import { Serch } from "../../components/serch_and_icons";
import { Nav_and_filter } from "../../components/nav_and_filter";
import { Card } from "../../components/card";

const Mujer = () =>{
    const api=[
        {id:1, name:'Vans Old Skool', precio:'$2000', img:'https://images.stockx.com/images/Vans-Old-Skool-Pro-Black-White.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1626898622&q=60'},
        {id:2, name:'Adidas Rivalry Low W', precio:'$2500', img:'https://cdn.mall.adeptmind.ai/https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_600%2Cf_auto%2Cq_auto%2F567b54194d9f4ba3b75faf420124a9a8_9366%2FTenis_Rivalry_Low_TR_Cafe_IE1666_01_standard.jpg_large.webp'},
        {id:3, name:'Puma RS-X', precio:'$3000', img:'https://i.linio.com/p/c6bff953f5072883e27c40e4c4e6fe33-product.jpg'},
        {id:4, name:'Adidas Y-3 Gazelle', precio:'$3000', img:'https://assets.adidas.com/images/w_600,f_auto,q_auto/e4233367991242369243ada4004be1ea_9366/Tenis_Gazelle_ADV_Negro_GW3141_01_standard.jpg'},
        {id:5, name:'Adidas Superstar classics', precio:'$2200', img:'https://timeout.hn/wp-content/uploads/2023/02/EG4958-7ed0855435194229a525aad6009a0497_9366-247x247.webp'},
        {id:6, name:'Nike Gamma Forfce', precio:'$3000', img:'https://http2.mlstatic.com/D_NQ_NP_674354-MLM71698808871_092023-O.webp'},
    ]
    return(
        <>
        <body>
        <header className="head">
            <Header/>
        </header>
            <main>
                <div className="Second_nav">
                    <img src="" alt="logo" />
                    <Title/>
                    <Serch/>
                </div>
                <article> 
                    <div className="sub_nav">            
                        <Nav_and_filter/>
                    </div> 
                    <section className="cardlist">
                        {api.map (element => (
                            <Card name={element.name} img={element.img} precio={element.precio} />
                            ))
                         }
                    </section>
                </article>
            </main>
        </body>
       
        </>
    )
}
export{Mujer};
