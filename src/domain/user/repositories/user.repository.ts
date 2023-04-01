import { User } from '@domain/user/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../../repository';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(@InjectRepository(User) protected readonly repository: Repository<User>) {
    super(repository);
  }
}