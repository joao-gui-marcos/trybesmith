import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';

// const properties = ['username', 'vocation', 'level', 'password'];

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();
    return users;
  }

  public create(user: User): Promise<User> {
    return this.model.create(user);
  }
}

export default UserService;