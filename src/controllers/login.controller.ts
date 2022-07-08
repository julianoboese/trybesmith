import { NextFunction, Request, Response } from 'express';
import LoginService from '../services/login.service';
import JwtUtils from '../utils/jwt';

export default class LoginController {
  private service: LoginService;

  private jwtUtils: JwtUtils;

  constructor(service: LoginService) {
    this.service = service;
    this.jwtUtils = new JwtUtils();
  }

  public getLogin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = await this.service.getLogin(req.body);

      const { id, username } = user;
  
      const token = this.jwtUtils.generateJwtToken({ id, username });
  
      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  };
}
