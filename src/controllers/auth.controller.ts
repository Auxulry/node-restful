import { Request, Response } from 'express';
import ApiController from './api.controller';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

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
    const { email, password } = req.body;

    // * Algorithm RS526
    // * You Need Private Key and Public Key
    const privateKey = fs.readFileSync(path.resolve(__dirname, '../keys/private.key'), 'utf8');

    const token = jwt.sign({
      email: email,
      password: password
    }, privateKey, { expiresIn: '1h', algorithm: 'RS256' });

    this.response(res, {
      status: 200,
      message: 'Authentication Posted',
      data: {
        token: token
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