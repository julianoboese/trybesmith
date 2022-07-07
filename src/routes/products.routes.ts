import { Router } from 'express';
import ProductController from '../controllers/products.controller';
import connection from '../models/connection';
import ProductModel from '../models/products.model';
import ProductService from '../services/products.service';

const routes = Router();

const productModel = new ProductModel(connection);
const productService = new ProductService(productModel);
const productController = new ProductController(productService);

routes.get('/', productController.getAll);

export default routes;
