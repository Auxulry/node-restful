import { Request, Response } from 'express';
import ApiController from './api.controller';

class AuthController extends ApiController {
  constructor() {
    super();
    this.authenticated = this.authenticated.bind(this);
    this.unauthenticated = this.unauthenticated.bind(this);
  }

  /**
   *
   * Authentication
   *
   * @param req
   * @param res
   */
  authenticated(req: Request, res: Response): void {
    this.response(res, {
      status: 200,
      message: 'Authentication Posted',
      data: {
        token: 'SAZXasasads'
      }
    });
  }

  /**
   *
   * Unauthenticated
   *
   * @param req
   * @param res
   */
  unauthenticated(req: Request, res: Response): void {
    this.response(res, {
      status: 200,
      message: 'Unauthenticated Posted',
      data: null
    });
  }
}

export default AuthController;