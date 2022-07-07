import { Pool } from 'mysql2/promise';
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
}
