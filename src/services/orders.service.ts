import IOrder from '../interfaces/orders.interface';
import OrderModel from '../models/orders.model';

export default class OrderService {
  private model: OrderModel;

  constructor(model: OrderModel) {
    this.model = model;
  }

  public getAll = async (): Promise<IOrder[]> => {
    const orders = await this.model.getAll();

    return orders;
  };

  public create = async (newOrder: IOrder): Promise<IOrder> => {
    const order = await this.model.create(newOrder);

    const { productsIds } = newOrder;

    await Promise.all(productsIds.map((productId: number): Promise<void> => (
      this.model.updateProduct(order.id as number, productId))));

    return order;
  };
}
