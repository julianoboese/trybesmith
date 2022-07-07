import { Request, Response } from 'express';
import ProductService from '../services/products.service';

export default class ProductController {
  private service: ProductService;

  constructor(service: ProductService) {
    this.service = service;
  }

  public getAll = async (req: Request, res: Response): Promise<void> => {
    const products = await this.service.getAll();

    res.status(200).json(products);
  };
}