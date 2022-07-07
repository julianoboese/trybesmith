import JoiEnum from '../enums/joi.enum';

export default class ValidationError extends Error {
  status: number;

  constructor(type: keyof typeof JoiEnum, message: string) {
    super(message);
    this.status = JoiEnum[type] || 500;
  }
}
