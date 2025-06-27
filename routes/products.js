import express from 'express';
import { getAllProducts, getProductDetails } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductDetails);
// Add more routes as needed (e.g., POST, PUT, DELETE)

export default router; 