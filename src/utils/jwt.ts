import { JwtPayload, Secret, sign, SignOptions, verify } from 'jsonwebtoken';
import HttpError from '../shared/http.error';
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
    sign(user, this.TOKEN_SECRET, this.jwtConfig);

  public authenticateToken = async (token: string | undefined): Promise<string | JwtPayload> => {
    if (!token) {
      throw new HttpError(401, 'Token not found');
    }
  
    try {
      const validate = verify(token, this.TOKEN_SECRET);
      return validate;
    } catch (error) {
      throw new HttpError(401, 'Invalid token');
    }
  };
}
