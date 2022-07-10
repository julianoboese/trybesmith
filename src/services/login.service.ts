import ILogin from '../interfaces/login.interface';
import IUser from '../interfaces/users.interface';
import LoginModel from '../models/login.model';
import HttpError from '../shared/http.error';

export default class LoginService {
  private model: LoginModel;

  constructor(model: LoginModel) {
    this.model = model;
  }

  public getLogin = async (login: ILogin): Promise<IUser> => {
    const user = await this.model.getLogin(login);

    if (user.length === 0) throw new HttpError(401, 'Username or password invalid');
    
    return user[0];
  };
}
