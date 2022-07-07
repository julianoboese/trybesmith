import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/products.interface';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<IProduct[]> => {
    const [products] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );

    return products as IProduct[];
  };

  public create = async (newProduct: IProduct): Promise<IProduct> => {
    const { name, amount } = newProduct;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    const { insertId } = result;

    return { id: insertId, ...newProduct };
  };
}
