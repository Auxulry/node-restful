import { Request, Response } from 'express';
import responser from '../utils/responser';

class AuthController {
  constructor() {
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
    responser(res, {
      status: 200,
      message: 'Authentication Posted',
      data: null
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
    responser(res, {
      status: 200,
      message: 'Unauthenticated Posted',
      data: null
    });
  }
}

export default AuthController;