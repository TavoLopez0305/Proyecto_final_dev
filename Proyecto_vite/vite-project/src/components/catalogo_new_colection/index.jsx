import React from "react";
import '.styels.css'
import { Nav_and_filter } from "../nav_and_filter";
import { Cartlist } from "../Cardlist";
import { Card } from "../card";

const Catalogo_lo_mas_vedido = () => {
    const tenisArray = [
        {
           id: 1,
           nombre :'Tenis x' ,
           categoria: 'Running',
           precio: 99.99,
           color: 'Azul',
           marca: 'Nike',
           img : 'https://images.footballfanatics.com/tennessee-titans/unisex-nike-light-blue-tennessee-titans-zoom-pegasus-39-running-shoe_pi4644000_ff_4644564-acb899e13bc5ce4ad2f7_full.jpg?_hv=2'
       },
       {
           id: 2,
           nombre :'Tenis x' ,
           categoria: 'Basketball',
           precio: 129.99,
           color: 'Rojo',
           marca: 'Adidas',
           img: 'imagen2.jpg'
       },
       {
           id: 3,
           nombre :'Tenis x' ,
           categoria: 'Gimnasio y Entrenamiento',
           precio: 79.99,
           color: 'Blanco',
           marca: 'Puma',
           img: 'imagen3.jpg'
       },
       {
           id: 4,
           nombre :'Tenis x' ,
           categoria: 'Tacos de Futbol',
           precio: 79.99,
           color: 'Blanco',
           marca: 'Puma',
           img: 'imagen3.jpg'
       },
       {
           id: 5,
           nombre :'Tenis x' ,
           categoria: 'Tacos de Futbol',
           precio: 79.99,
           color: 'Blanco',
           marca: 'Puma',
           img: 'imagen3.jpg'
       },
       {
           id: 6,
           nombre :'Tenis x' ,
           categoria: 'Casual',
           precio: 79.99,
           color: 'Blanco',
           marca: 'Puma',
           img: 'imagen3.jpg'
       }
   ];
   
   const categorias = [
       {
           id: 1,
           nombre: 'Running'
       },
       {
           id: 2,
           nombre: 'Gimnasio y Entrenamiento'
       },
       {
           id: 3,
           nombre: 'Tacos de Futbol'
       },
       {
           id: 4,
           nombre: 'Golf'
       },
       {
           id: 5,
           nombre: 'Basketball'
       },
       {
           id: 6,
           nombre: 'Casual'
       }
   ];
   
   const marcas = [
       {
           id: 1,
           nombre: 'Nike'
       },
       {
           id: 2,
           nombre: 'Adidas'
       },
       {
           id: 3,
           nombre: 'Puma'
       }
   ];
   
   // Combinar los tres arreglos en uno solo
   const tenisCompletoArray = tenisArray.map(tenis => {
       const categoriaEncontrada = categorias.find(cat => cat.nombre === tenis.categoria);
       const marcaEncontrada = marcas.find(marca => marca.nombre === tenis.marca);
   
       return {
           ...tenis,
           categoria: categoriaEncontrada,
           marca: marcaEncontrada
       };
   });
    return(
            <div>
                <Nav_and_filter/>
                <Cartlist>{
                    
                    tenisCompletoArray.map(Element =>(
                        <Card key={Element.id} name={Element.name} precio={Element.precio} img={Element.img}/>
                    ))
                    }
                </Cartlist>
            </div>

    )
}

export {Catalogo_lo_mas_vedido}