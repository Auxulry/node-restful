import { User } from '@domain/user/entities/user.entity';
import { UserRepository } from '@domain/user/repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserRepository])],
  controllers: [AuthController],
  providers: [UserRepository, AuthService],
})
export class AuthModule { }