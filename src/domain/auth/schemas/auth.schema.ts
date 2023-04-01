import { ApiProperty } from '@nestjs/swagger';
import { Responser } from '../../schema';
import * as joi from 'joi';

export class RegisterRequest {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

export const RequestSchema = joi.object({
  name: joi.string()
    .required(),
  email: joi.string()
    .email()
    .required(),
  password: joi.string()
    .pattern(new RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'))
});

export class LoginRequest {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

export const LoginSchema = joi.object({
  email: joi.string()
    .email()
    .required(),
  password: joi.string()
    .required()
});

export class AuthData {
  @ApiProperty()
  accessToken: string;
}

export class AuthResponse extends Responser {
  @ApiProperty({
    type: AuthData
  })

  data: AuthData;
}
