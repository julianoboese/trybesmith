import { Router } from 'express';
import OrderController from '../controllers/orders.controller';
import AuthMiddleware from '../middlewares/auth.middleware';
import OrderMiddleware from '../middlewares/orders.middleware';
import connection from '../models/connection';
import OrderModel from '../models/orders.model';
import OrderService from '../services/orders.service';

const routes = Router();

const orderModel = new OrderModel(connection);
const orderService = new OrderService(orderModel);
const orderController = new OrderController(orderService);

const orderMiddleware = new OrderMiddleware();
const authMiddleware = new AuthMiddleware();

routes.get('/', orderController.getAll);
routes.post('/', authMiddleware.authenticate, orderMiddleware.validation, orderController.create);

export default routes;
