import express from "express";
import { getAll, getById, create, deleteCart, update } from './controller/cartController.js'
import { getAll as getAllProduct, getById as getByIdProduct, create as createProduct, deleteProduct, update as updateProduct} from './controller/productController.js'

const router = express.Router();

router.get('/v1/cart', getAll);
router.get('/v1/cart/:id', getById);
router.post('/v1/cart', create);
router.delete('/v1/cart/:id', deleteCart);
router.put('/v1/cart/:id', update);

router.get('/v1/product/', getAllProduct);
router.get('/v1/product/:id', getByIdProduct);
router.post('/v1/product', createProduct);
router.delete('/v1/product/:id', deleteProduct);
router.put('/v1/product/:id', updateProduct);

export default router 