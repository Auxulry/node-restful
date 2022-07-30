import { CreateUserInterface, UsersInterface } from '../types/users.types';
import DB from '../config/database';

class UserServices {
  getUsers(): Array<UsersInterface> {
    return [
      {
        id: 1,
        name: 'test',
        email: 'test@gmail.com'
      },
      {
        id: 2,
        name: 'test2',
        email: 'test2@gmail.com'
      }
    ];
  }

  createUser(payload: CreateUserInterface) {
    const { name, email, password } = payload;
    DB.query(
      'INSERT INTO users (name, email, password, created_at, updated_at) VALUES ($1, $2, $3, $4, $5);',
      [name, email, password, new Date().toDateString(), new Date().toDateString()]
    )
      .then(() => {
        const res = {
          status: 201,
          message: 'created',
          data: null,
          error: null
        };

        return res;
      })
      .catch((err) => {
        const res = {
          status: 400,
          message: 'failed to create',
          data: null,
          error: err
        };

        return res;
      });
  }
}

export default UserServices;