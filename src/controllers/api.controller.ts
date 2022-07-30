import { Response } from 'express';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

interface IResponser {
  status: number;
  message: string;
  data: unknown
}

class ApiController {
  /**
   *
   * Api Responser
   *
   * @param res
   */
  response(res: Response, responser: IResponser): void {
    res.status(responser.status).json(responser);
    res.end;
  }

  /**
   *
   * Generate Temporary Token
   *
   * @param email
   * @param password
   * @returns
   */
  genTempToken(email: string, password: string): string {
    // * Algorithm RS526
    // * You Need Private Key and Public Key
    const privateKey = fs.readFileSync(path.resolve(__dirname, '../keys/private.key'), 'utf8');

    const token = jwt.sign({
      email: email,
      password: password
    }, privateKey, { expiresIn: '1h', algorithm: 'RS256' });

    return `Bearer ${token}`;
  }
}

export default ApiController;