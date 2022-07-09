import { NextFunction, Request, Response } from 'express';
import JwtUtils from '../utils/jwt';

export default class AuthMiddleware {
  private jwtUtils: JwtUtils;

  constructor() {
    this.jwtUtils = new JwtUtils();
  }

  public authenticate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const token = req.headers.authorization;
    
    try {
      const user = await this.jwtUtils.authenticateToken(token);
      res.locals.user = user;
    } catch (error) {
      next(error);
    }

    next();
  };
}
