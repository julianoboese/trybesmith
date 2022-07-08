import JoiEnum from '../enums/joi.enum';

export default interface IJoiError {
  type: keyof typeof JoiEnum,
  message: string
}
