import { IRouter, NextFunction, Request, Response, Router } from 'express';
import AuthController from '../controllers/auth.controller';
import authenticated from '../middlewares/auth';

const authRoutes: IRouter = Router();

const Controller = new AuthController();

// * List Of Auth Routes
authRoutes
  .route('/login')
  .all((req: Request, res: Response, next: NextFunction) => {
    next();
  })
  .post(Controller.authenticated);

authRoutes
  .route('/logout')
  .all((req: Request, res: Response, next: NextFunction) => {
    authenticated(req, res, next);
  })
  .post(Controller.unauthenticated);

export default authRoutes;
