import express, { Router } from 'express';
import { ProductController } from '../ProductController';

export const productRouter: Router = express.Router();
const productController = new ProductController();

productRouter.post("/", productController.createProduct);
productRouter.put("/category/:productId", productController.editCategory);