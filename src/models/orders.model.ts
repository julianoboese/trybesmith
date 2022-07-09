import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IOrder from '../interfaces/orders.interface';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<IOrder[]> => {
    const [orders] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Orders',
    );

    const [products] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products WHERE orderId IS NOT NULL',
    );

    const productsByOrder: Record<string, number[]> = products
      .reduce((acc: Record<string, number[]>, product: RowDataPacket) => {
        const currentOrder: number[] = acc[product.orderId]
          ? [...acc[product.orderId], product.id] : [product.id];
        
        return { ...acc, [product.orderId]: currentOrder };
      }, {});

    const fullOrders: RowDataPacket[] = orders
      .map((order: RowDataPacket) => ({ ...order, productsIds: productsByOrder[order.id] }));

    return fullOrders as IOrder[];
  };

  public create = async (newOrder: IOrder): Promise<IOrder> => {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [newOrder.userId],
    );

    const { insertId } = result;

    return { id: insertId, ...newOrder };
  };

  public updateProduct = async (orderId: number, productId: number): Promise<void> => {
    await this.connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [orderId, productId],
    );
  };
}
