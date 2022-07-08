import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

export default class OrderController {
  private service: OrderService;

  constructor(service: OrderService) {
    this.service = service;
  }

  public getAll = async (_req: Request, res: Response): Promise<void> => {
    const orders = await this.service.getAll();

    res.status(200).json(orders);
  };
}
