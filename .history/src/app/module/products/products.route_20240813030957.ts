
import express from 'express';
import { ProductController } from './products.controller';
const router = express.Router();

router.post("/create-product", ProductController.createProduct);

export const ProductRoutes= router;
