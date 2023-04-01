import { User } from '@domain/user/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserRepository])],
  controllers: [],
  providers: [UserRepository],
})
export class UserModule { }