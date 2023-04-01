import { Injectable, NestMiddleware, Req, Res } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { UserRepository } from '@domain/user/repositories/user.repository';
import { Auth } from '@declarations/auth';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private userRepository: UserRepository) { }

  async use(@Req() req: Auth.AuthenticatedRequest, @Res() res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'Missing Authorization header' });
    }

    const token = authHeader.replace('Bearer ', '');
    let decodedToken;

    try {
      decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch (err) {
      return res.status(401).json({ message: 'Invalid Token' });
    }

    const { id } = decodedToken;
    const user = await this.userRepository.findById(id);

    if (!user) {
      return res.status(401).json({ message: 'Invalid Token' });
    }

    req.user = user;
    next();
  }
}
