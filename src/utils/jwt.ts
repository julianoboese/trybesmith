import { Secret, sign, SignOptions } from 'jsonwebtoken';
import IUser from '../interfaces/users.interface';

export default class JwtUtils {
  private TOKEN_SECRET: Secret;

  private jwtConfig: SignOptions;

  constructor() {
    this.TOKEN_SECRET = process.env.TOKEN_SECRET || 'mySecret' as Secret;
    this.jwtConfig = {
      expiresIn: '15m',
      algorithm: 'HS256',
    };
  }

  public generateJwtToken = (user: Pick<IUser, 'id' | 'username'>): string => 
    sign({ user }, this.TOKEN_SECRET, this.jwtConfig);
}
