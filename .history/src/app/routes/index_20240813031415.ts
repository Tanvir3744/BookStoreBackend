import express from 'express'
import { ProductRoutes } from "../module/products/products.route";

const router = express.Router();
const routeModule= [{
    path: "/products", 
    route: ProductRoutes
}]


routeModule.forEach((routerElement) => router.use(routerElement.path, routerElement.route))