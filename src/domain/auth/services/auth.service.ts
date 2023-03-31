
import { Auth } from '@declarations/auth';
import { User } from '@domain/user/entities/user.entity';
import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BCRYPT_SALT } from 'src/common/constants';
import { UserRepository } from '@domain/user/repositories/user.repository';
import * as bcrypt from 'bcrypt';
import { isNull } from 'src/common/properties';
import * as jwt from 'jsonwebtoken';
import { LoginRequest, RegisterRequest } from '../schemas/auth.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository
  ) { }
  async register(payload: RegisterRequest): Promise<Auth.AuthResponse> {
    const hash = bcrypt.hashSync(payload.password, BCRYPT_SALT);

    const user = new User();
    user.name = payload.name;
    user.email = payload.email;
    user.password = hash;

    const found = await this.userRepository.findByEmail(user.email);
    if (!isNull(found)) {
      throw new ConflictException('email already registered');
    }

    const response = await this.userRepository.insert(user);

    const token = jwt.sign({
      id: response.generatedMaps[0],
      email: user.email
    }, 'shhhhh', { expiresIn: '1h' });

    return {
      accessToken: token
    };
  }

  async login(payload: LoginRequest): Promise<Auth.AuthResponse> {
    const response = await this.userRepository.findByEmail(payload.email);
    if (isNull(response)) {
      throw new NotFoundException('User not registered');
    }

    const hashMatch = bcrypt.compareSync(payload.password, response?.password as string);
    if (!hashMatch) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = jwt.sign({
      id: response?.id,
      email: response?.email
    }, 'shhhhh', { expiresIn: '1h' });

    return {
      accessToken: token
    };
  }
}
