import { User } from '@entities/user.entity';
import { UserRepository } from '@repositories/user.repository';
import { inject, injectable } from 'tsyringe';
import { HttpException } from '@exceptions/http.exception';
import bcrypt from 'bcrypt';
import { QueryFailedError } from 'typeorm';
import { Auth } from '@declarations/auth';
import jwt from 'jsonwebtoken';
import { isNull } from '@utils/properties';
import { NotFoundException } from '@exceptions/not-found.exception';
import { BCRYPT_SALT } from '@utils/constants';

@injectable()
export class AuthUsecase implements Auth.UsecaseInterface {
  constructor(@inject('UserRepository') private readonly userRepository: typeof UserRepository) {
    this.userRepository = userRepository;
  }

  async register(user: User): Promise<Auth.AuthResponse> {
    try {
      const hash = bcrypt.hashSync(user.password, BCRYPT_SALT);
      user.password = hash;
      const found = await this.userRepository.findByEmail(user.email);
      if (!isNull(found)) {
        throw new HttpException(419, 'CONFLICT', 'email already registered');
      }

      const response = await this.userRepository.insert(user);

      const token = jwt.sign({
        id: response.generatedMaps[0],
        email: user.email
      }, 'shhhhh', { expiresIn: '1h' });

      return {
        accessToken: token
      };
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new HttpException(500, 'IMTERNAL_SERVER_ERROR', error.message);
      } else {
        throw error;
      }
    }
  }

  async login(user: User): Promise<Auth.AuthResponse> {
    try {
      const response = await this.userRepository.findByEmail(user.email);
      if (isNull(response)) {
        throw new NotFoundException('User not registered');
      }

      const hashMatch = bcrypt.compareSync(user.password, response?.password as string);
      if (!hashMatch) {
        throw new HttpException(401, 'UNAUTHORIZED', 'Invalid email or password');
      }

      const token = jwt.sign({
        id: response?.id,
        email: response?.email
      }, 'shhhhh', { expiresIn: '1h' });

      return {
        accessToken: token
      };
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new HttpException(500, 'IMTERNAL_SERVER_ERROR', error.message);
      } else {
        throw error;
      }
    }
  }
}