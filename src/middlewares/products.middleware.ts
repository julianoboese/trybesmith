import { NextFunction, Request, Response } from 'express';
import Joi, { ObjectSchema } from 'joi';
import JoiEnum from '../enums/joi.enum';
import ValidationError from '../shared/validation.error';

export default class ProductMiddleware {
  private schema: ObjectSchema;

  constructor() {
    this.schema = Joi.object({
      name: Joi.string().min(3).required(),
      amount: Joi.string().min(3).required(),
    });
  }

  public validation = (req: Request, _res: Response, next: NextFunction): void => {
    const { error } = this.schema.validate(req.body);

    if (error) {
      const { type, message } = error.details[0];

      throw new ValidationError(type as keyof typeof JoiEnum, message);
    }

    next();
  };
}
