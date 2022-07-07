import IProduct from '../interfaces/products.interface';
import ProductModel from '../models/products.model';

export default class ProductService {
  private model: ProductModel;

  constructor(model: ProductModel) {
    this.model = model;
  }

  public getAll = async (): Promise<IProduct[]> => {
    const products = await this.model.getAll();

    return products;
  };
}
