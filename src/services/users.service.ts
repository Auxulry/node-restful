import { UsersInterface } from '../types/users.types';

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
}

export default UserServices;