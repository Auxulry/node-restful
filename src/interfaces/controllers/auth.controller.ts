import { User } from '../../domain/entities/user.entity';
import { Request, Response, Router } from 'express';
import { inject, injectable } from 'tsyringe';
import { Controller } from './controller';
import { Auth } from '@declarations/auth';

@injectable()
export class AuthController extends Controller implements Auth.ControllerInterface {
  public router: Router;
  constructor(@inject('AuthUsecase') private readonly authUsecase: Auth.UsecaseInterface) {
    super();
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.authUsecase = authUsecase;
  }

  async register(req: Request, res: Response): Promise<Response> {
    try {
      const payload = new User();
      payload.name = req.body.name;
      payload.email = req.body.email;
      payload.password = req.body.password;

      const data = await this.authUsecase.register(payload);

      return this.successResponse<Auth.AuthResponse>(res, {
        code: 201,
        status: 'CREATED',
        message: 'Successfully register',
        data: data
      });
    } catch (error) {
      return this.errorResponse(res, error);
    }
  }

  async login(req: Request, res: Response): Promise<Response> {
    try {
      const payload = new User();
      payload.email = req.body.email;
      payload.password = req.body.password;

      const data = await this.authUsecase.login(payload);

      return this.successResponse<Auth.AuthResponse>(res, {
        code: 200,
        status: 'OK',
        message: 'Successfully login',
        data: data
      });
    } catch (error) {
      return this.errorResponse(res, error);
    }
  }
}
