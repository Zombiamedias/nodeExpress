import express from 'express';
import { createProduct, getAllProducts, getProduct, deleteProduct, updateProduct } from '../controllers/productsController.js';
import { body } from 'express-validator'

const router = express.Router();

// middleware validations 
const validations = [
    body('name').notEmpty().withMessage('Name is required'),
    body('price').isNumeric().isFloat({ gt: 0 }).withMessage('Price must be a number and be greater to 0'),
    body('category').notEmpty().withMessage('Category is required'),
    body('description').notEmpty().withMessage('Description is required')
]

// all routes in here are starting with /products
router.get('/', getAllProducts)
router.post('/', validations, createProduct);
router.get('/:id', getProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;