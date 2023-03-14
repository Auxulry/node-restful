import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { IncomingHttpHeaders } from 'http';
import fs from 'fs';
import path from 'path';

function authenticated (req: Request, res: Response, next: NextFunction): void {
  const headers: IncomingHttpHeaders = req.headers;
  const Authorization: string | null = headers['authorization'] || null;
  const token = Authorization === null ? null : Authorization.split(' ')[1];

  if (token === null) {
    res.status(401).json({
      status: 401,
      message: 'unauthorized',
      data: null
    });
    res.end;
  } else {
    const publicKey = fs.readFileSync(path.resolve(__dirname, '../keys/public.key'), 'utf8');

    jwt.verify(token, publicKey, (err) => {
      if (err) {
        res.status(401).json({
          status: 401,
          message: 'invalid token',
          data: null
        });
        res.end;
      } else {
        next();
      }
    });
  }
}

export default authenticated;