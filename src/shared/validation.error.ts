import JoiEnum from '../enums/joi.enum';
import IJoi from '../interfaces/joi.interface';

export default class ValidationError extends Error {
  status: number;

  constructor(type: IJoi['type'], message: string) {
    super(message);
    this.status = JoiEnum[type] || 500;
  }
}
