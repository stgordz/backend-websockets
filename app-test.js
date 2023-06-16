// const { ProductManager } = require('./productos.js')
// uso el import -> en el package.json agrego esta linea -> "type": "module",
/*import ProductManager from "./productos.js";

const productos = new ProductManager('./data/productos.json');

const p1 = productos.addProduct ( "Product1", "Description1", 100, "image1", "code1", 10 );
const p2 = productos.addProduct ( "Product2", "Description2", 200, "image2", "code2", 20 );
const p3 = productos.addProduct ( "Product3", "Description3", 300, "image3", "code3", 30 );
const p4 = productos.addProduct ( "Product4", "Description4", 400, "image4", "code4", 40 );
const p5 = productos.addProduct ( "Product5", "Description5", 500, "image5", "code5", 50 );
const p6 = productos.addProduct ( "Product6", "Description6", 600, "image6", "code6", 60 );
const p7 = productos.addProduct ( "Product7", "Description7", 700, "image7", "code7", 70 );
const p8 = productos.addProduct ( "Product8", "Description8", 800, "image8", "code8", 80 );
const p9 = productos.addProduct ( "Product9", "Description9", 900, "image9", "code9", 90 );
const p10 = productos.addProduct ( "Product10", "Description10", 1000, "image10", "code10", 100 );

console.log({ p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 });
//console.log(productos.getProductById(5));

//console.log(productos.deleteProduct(3));
//console.log(productos.deleteProduct(13));

/*const updateP1 = {
    id: 50,
    price: 5000,
    stock: 500,
    img: 'imgage5',
    title: 'Modified'
}

//console.log(productos.updtaeProduct(4, updateP1));
/*console.log(productos.getProduct());*/