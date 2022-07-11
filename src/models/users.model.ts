import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/users.interface';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (newUser: IUser): Promise<IUser> => {
    const { username, classe, level, password } = newUser;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO heroku_82de239a63b36ea.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );

    const { insertId } = result;

    return { id: insertId, ...newUser };
  };
}
