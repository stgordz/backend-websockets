//carts
import { Router } from 'express';
import Cart from '../models/carts.js'

//consts
const router = Router();
const cart = new Cart();

//carritos completos
router.get('/', (req, res) => {
    const result = cart.getCarts();
    return res.json({ result });
});
//particular
router.get('/:id', (req, res) => {
    const result = cart.getCartById(parseInt(req.params.id));
    return res.json({ result });
});
//agregar productos  metodo POST
router.post('/', (req, res) => {
    const result = cart.createCart();
    return res.json({ result });
});

router.post('/:id/product/:pid', (req, res) => {
    const { id, pid } = req.params;
    const result = cart.addProductCart(parseInt(id), parseInt(pid))
    return res.json({ result });
});

//exports
export default router;