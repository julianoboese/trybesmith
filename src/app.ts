import express from 'express';
import ErrorMiddleware from './middlewares/errors.middleware';
import productsRoutes from './routes/products.routes';

const app = express();

app.use(express.json());

const errorMiddleware = new ErrorMiddleware();

app.use('/products', productsRoutes);

app.use(errorMiddleware.handleError);

export default app;
