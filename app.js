//imports
import express from 'express';
import products from './src/routers/products.js';
import carts from './src/routers/carts.js';

console.log('prueba');

//constantes
const app = express();
const port = 8080;

app.use(express.json());
app.use('/api/products', products);
app.use('/api/carts', carts);

//inicio en localhost
app.get ('/', function (req, res) {
    return res.send('home')
});


//mensaje de puerto en uso
app.listen(port, () => {
    console.log(`corriendo servidor en puerto ${port}`)
});