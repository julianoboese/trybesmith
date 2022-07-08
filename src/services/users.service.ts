// import bcrypt from 'bcrypt';
import IUser from '../interfaces/users.interface';
import UserModel from '../models/users.model';

export default class UserService {
  private model: UserModel;

  constructor(model: UserModel) {
    this.model = model;
  }

  public create = async (newUser: IUser): Promise<IUser> => {
    // const passwordHash = await bcrypt.hash(newUser.password, 5);
    // const encryptedNewUser = { ...newUser, password: passwordHash };  

    const user = await this.model.create(newUser);

    return user;
  };
}
