
import express from 'express';
import { ProductController } from './products.controller';
const router = express.Router();

router.post("/create-product", ProductController.createProduct);
router.get('/:id', ProductController.getSingleProduct);
router.patch("/:id", ProductController.updateProduct)
router.get("/", ProductController.getAllProduct)

export const ProductRoutes= router;
