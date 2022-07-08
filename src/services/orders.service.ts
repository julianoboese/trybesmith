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
}
