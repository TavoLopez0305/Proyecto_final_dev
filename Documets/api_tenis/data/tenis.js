/*/const tenisArray = [
    {
        id: 1,
        nombre :'s' ,
        categoria: 'Running',
        precio: 99.99,
        color: 'Azul',
        marca: 'Nike',
        img: 'imagen1.jpg'
    },
    {
        id: 2,
        categoria: 'Basketball',
        precio: 129.99,
        color: 'Rojo',
        marca: 'Adidas',
        img: 'imagen2.jpg'
    },
    {
        id: 3,
        categoria: 'Tennis',
        precio: 79.99,
        color: 'Blanco',
        marca: 'Puma',
        img: 'imagen3.jpg'
    }
    
];
const categoria = [
    {
        id :1,
        nombre :'Running'
    },
    {
        id :2,
        nombre :'Gismnasio y Entrenaminto'
    },
    {
        id :3,
        nombre :'Tacos de Futbol'
    },
    {
        id : 4,
        nombre: 'Golf'
    },
    {
        id : 5,
        nombre :'Basketball'
    },
    {
        id : 6,
        nombre :'Casual'
    },
];
const marca = [{
    {
        id :1,
        nombre :'Nike'
    },
    {
        id :2,
        nombre :'Adidas'
    },
    {
        id :3,
        nombre :'Puma'
    },
}];
module.exports = {tenisArray, marca, categoria}; */
const tenisArray = [
    {
        id: 1,
        nombre :'Tenis x' ,
        categoria: 'Running',
        precio: 99.99,
        color: 'Azul',
        marca: 'Nike',
        img: 'imagen1.jpg'
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

console.log(tenisCompletoArray);
module.exports[tenisCompletoArray];