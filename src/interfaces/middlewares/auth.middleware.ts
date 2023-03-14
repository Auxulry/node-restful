import { Controller } from '@controllers/controller';
import { UserRepository } from '@repositories/user.repository';
import jwt from 'jsonwebtoken';
import { User } from '@entities/user.entity';
import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: User
    }
  }
}

export class AuthMiddleware extends Controller {
  private readonly userRepository: typeof UserRepository;

  constructor() {
    super();
    this.userRepository = UserRepository;
  }

  async verifyToken(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void | express.Response> {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return this.errorResponse(res, { code: 401, status: 'UNAUTHORIZED', message: 'Unauthorized' });
    }

    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret) as { userId: string };
      const userId = decodedToken.userId;
      const user = await this.userRepository.findById(userId);

      if (!user) {
        return this.errorResponse(res, { code: 401, status: 'UNAUTHORIZED', message: 'Unauthorized' });
      }

      req.user = user;
      next();
    } catch (error) {
      return this.errorResponse(res, { code: 401, status: 'UNAUTHORIZED', message: 'Unauthorized' });
    }
  }
}