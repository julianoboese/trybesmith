import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/users.interface';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (newUser: IUser): Promise<IUser> => {
    const { username, classe, level, password } = newUser;
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );

    return newUser;
  };
}