import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import ErrorMiddleware from './middlewares/errors.middleware';
import loginRoutes from './routes/login.routes';
import usersRoutes from './routes/users.routes';
import productsRoutes from './routes/products.routes';
import ordersRoutes from './routes/orders.routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/login', loginRoutes);
app.use('/users', usersRoutes);
app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

const errorMiddleware = new ErrorMiddleware();
app.use(errorMiddleware.handleError);

export default app;
