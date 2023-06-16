//products
//imports
import { Router } from 'express';
import ProductManager from '../models/productos.js'

//variables
const router = Router();
const productos = new ProductManager();

//pedido de /products
router.get('/', (req, res) => {
    const { limit } = req.query;
    const p = productos.getProduct();
    let cantProductos;
    if (limit)
        cantProductos = p.slice(0, limit)
    else
        cantProductos = p;
    return res.json({ cantTotal: p.length, productos: cantProductos });
});

//obtener productos por id: metodo GET
router.get('/:id', (req, res) => {
    const { id } = req.params
    return res.json(productos.getProductById(parseInt(id)))
});

//agregar productos  metodo POST
router.post ('/', (req, res) => {
    const {title, description, code, price, thumbnail, status, stock, category} = req.body;
    const result = productos.addProduct(title, description, code, price, thumbnail, status, stock, category);
    return res.json({ result });
})
//modificar productos  metodo PUT
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const result = productos.updtaeProduct(parseInt(id), req.body);
    return res.json({ result });
});
//borrar productos  metodo DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const result = productos.deleteProduct(parseInt(id));
    return res.json({ result });
});

//exports
export default router;