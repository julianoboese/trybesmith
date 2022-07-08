import { Request, Response } from 'express';
import UserService from '../services/users.service';
import JwtUtils from '../utils/jwt';

export default class UserController {
  private service: UserService;

  private jwtUtils: JwtUtils;

  constructor(service: UserService) {
    this.service = service;
    this.jwtUtils = new JwtUtils();
  }

  public create = async (req: Request, res: Response): Promise<void> => {
    const user = await this.service.create(req.body);
    const { id, username } = user;

    const token = this.jwtUtils.generateJwtToken({ id, username });

    res.status(201).json({ token });
  };
}
