import { LoginRequest, RegisterRequest } from '@domain/auth/schemas/auth.schema';
import { User } from '@domain/user/entities/user.entity';
import { Request, Response } from 'express';

export declare namespace Auth {
  interface AuthResponse {
    accessToken: string
  }

  interface AuthRegisterRequest {
    name: string
    email: string
    password: string
  }

  interface AuthenticatedRequest extends Request {
    user: User;
  }

  interface Controller {
    register(_req: RegisterRequest, _res: Response): Promise<Response>
    login(_req: LoginRequest, _res: Response): Promise<Response>
  }

  interface Service {
    register(_payload: RegisterRequest): Promise<AuthResponse>
    login(_payload: LoginRequest): Promise<AuthResponse>
  }
}