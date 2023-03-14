
import { AppMainDataSource } from '../../interfaces/database/database.provider';
import { User } from '@entities/user.entity';

export const UserRepository = AppMainDataSource.getRepository(User).extend({
  findByEmail(email: string) {
    return this.findOne({
      where: { email }
    });
  },
  findById(id: string) {
    return this.findOne({
      where: {
        id
      }
    });
  }
});
