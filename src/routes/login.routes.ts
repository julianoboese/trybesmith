import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import LoginMiddleware from '../middlewares/login.middleware';
import connection from '../models/connection';
import LoginModel from '../models/login.model';
import LoginService from '../services/login.service';

const routes = Router();

const loginModel = new LoginModel(connection);
const loginService = new LoginService(loginModel);
const loginController = new LoginController(loginService);

const loginMiddleware = new LoginMiddleware();

routes.post('/', loginMiddleware.validation, loginController.getLogin);

export default routes;
