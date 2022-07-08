import { Router } from 'express';
import OrderController from '../controllers/orders.controller';
import connection from '../models/connection';
import OrderModel from '../models/orders.model';
import OrderService from '../services/orders.service';

const routes = Router();

const orderModel = new OrderModel(connection);
const orderService = new OrderService(orderModel);
const orderController = new OrderController(orderService);

routes.get('/', orderController.getAll);

export default routes;
