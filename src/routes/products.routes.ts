import { Router } from 'express';
import ProductController from '../controllers/products.controller';
import ProductMiddleware from '../middlewares/products.middleware';
import connection from '../models/connection';
import ProductModel from '../models/products.model';
import ProductService from '../services/products.service';

const routes = Router();

const productModel = new ProductModel(connection);
const productService = new ProductService(productModel);
const productController = new ProductController(productService);

const productMiddleware = new ProductMiddleware();

routes.get('/', productController.getAll);
routes.post('/', productMiddleware.validate, productController.create);

export default routes;
