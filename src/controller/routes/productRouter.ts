import express, { Router } from 'express';
import { ProductController } from '../ProductController';

export const productRouter: Router = express.Router();
const productController = new ProductController();

productRouter.get("/all", productController.getAllProducts);
productRouter.get("/search", productController.getProductsByNameOrCategory);
productRouter.post("/", productController.createProduct);
productRouter.put("/category/:productId", productController.editCategory);