import { Router } from 'express';
import UserController from '../controllers/users.controller';
import UserMiddleware from '../middlewares/users.middleware';
import connection from '../models/connection';
import UserModel from '../models/users.model';
import UserService from '../services/users.service';

const routes = Router();

const userModel = new UserModel(connection);
const userService = new UserService(userModel);
const userController = new UserController(userService);

const userMiddleware = new UserMiddleware();

routes.post('/', userMiddleware.validation, userController.create);

export default routes;
