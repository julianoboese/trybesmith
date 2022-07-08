import { NextFunction, Request, Response } from 'express';
import Joi, { ObjectSchema } from 'joi';
import IJoi from '../interfaces/joi.interface';
import ValidationError from '../shared/validation.error';

export default class UserMiddleware {
  private schema: ObjectSchema;

  constructor() {
    this.schema = Joi.object({
      username: Joi.string().min(3).required(),
      classe: Joi.string().min(3).required(),
      level: Joi.number().min(1).required(),
      password: Joi.string().min(8).required(),
    });
  }

  public validation = (req: Request, _res: Response, next: NextFunction): void => {
    const { error } = this.schema.validate(req.body);

    if (error) {
      const { type, message } = error.details[0];

      throw new ValidationError(type as IJoi['type'], message);
    }

    next();
  };
}
