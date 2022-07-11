import { Pool } from 'mysql2/promise';
import ILogin from '../interfaces/login.interface';
import IUser from '../interfaces/users.interface';

export default class LoginModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getLogin = async (login: ILogin) => {
    const { username, password } = login;
    const [user] = await this.connection.execute(
      'SELECT * FROM heroku_82de239a63b36ea.Users WHERE username = ? AND password = ?',
      [username, password],
    );

    return user as IUser[];
  };
}
