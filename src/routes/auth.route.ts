import { IRouter, NextFunction, Request, Response, Router } from 'express';
import AuthController from '../controllers/auth.controller';

const authRoutes: IRouter = Router();

const Controller = new AuthController();

// * List Of Auth Routes
authRoutes
  .route('/login')
  .all((req: Request, res: Response, next: NextFunction) => {
    // this middleware function runs before any request to /users/:id
    // but it doesn't accomplish anything just yet---
    // it simply passes control to the next applicable function below using next()
    next();
  })
  .post(Controller.authenticated);

authRoutes
  .route('/logout')
  .all((req: Request, res: Response, next: NextFunction) => {
    // this middleware function runs before any request to /users/:id
    // but it doesn't accomplish anything just yet---
    // it simply passes control to the next applicable function below using next()
    next();
  })
  .post(Controller.unauthenticated);

export default authRoutes;
