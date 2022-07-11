import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/products.interface';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<IProduct[]> => {
    const [products] = await this.connection.execute(
      'SELECT * FROM heroku_82de239a63b36ea.Products',
    );

    return products as IProduct[];
  };

  public create = async (newProduct: IProduct): Promise<IProduct> => {
    const { name, amount } = newProduct;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO heroku_82de239a63b36ea.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    const { insertId } = result;

    return { id: insertId, ...newProduct };
  };
}
