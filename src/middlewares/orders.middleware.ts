import { NextFunction, Request, Response } from 'express';
import Joi, { ObjectSchema } from 'joi';
import IJoiError from '../interfaces/joi.interface';
import ValidationError from '../shared/validation.error';

export default class OrderMiddleware {
  private schema: ObjectSchema;

  constructor() {
    this.schema = Joi.object({
      productsIds: Joi.array().items(Joi.number().required()).required(),
    }).messages({
      'array.includesRequiredUnknowns': '"productsIds" must include only numbers',
    });
  }

  public validation = (req: Request, _res: Response, next: NextFunction): void => {
    const { error } = this.schema.validate(req.body);

    if (error) {
      const joiError = error.details[0] as IJoiError;

      throw new ValidationError(joiError);
    }

    next();
  };
}
