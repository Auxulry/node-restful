import { User } from '@entities/user.entity';
import { Request, Response } from 'express';

export declare namespace Auth {
  interface AuthResponse {
    accessToken: string
  }

  interface UsecaseInterface {
    register(_user: User): Promise<AuthResponse>
    login(_user: User): Promise<AuthResponse>
  }

  interface ControllerInterface {
    register(_req: Request, _res: Response): Promise<Response>
    login(_req: Request, _res: Response): Promise<Response>
  }
}