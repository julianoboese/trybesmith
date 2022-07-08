import JoiEnum from '../enums/joi.enum';
import IJoiError from '../interfaces/joi.interface';

export default class ValidationError extends Error {
  status: number;

  constructor(error: IJoiError) {
    super(error.message);
    this.status = JoiEnum[error.type] || 500;
  }
}
