import { IRouter, NextFunction, Request, Response, Router } from 'express';
import UsersController from '../controllers/users.controller';

const usersRoutes: IRouter = Router();

const Controller = new UsersController();

// * List Of Users Routes
usersRoutes
  .route('/')
  .all((req: Request, res: Response, next: NextFunction) => {
    // this middleware function runs before any request to /users/:id
    // but it doesn't accomplish anything just yet---
    // it simply passes control to the next applicable function below using next()
    next();
  })
  .get(Controller.getListOfUsers)
  .post(Controller.createUser);

usersRoutes
  .route('/:id')
  .all((req: Request, res: Response, next: NextFunction) => {
    // this middleware function runs before any request to /users/:id
    // but it doesn't accomplish anything just yet---
    // it simply passes control to the next applicable function below using next()
    next();
  })
  .get(Controller.findUser)
  .put(Controller.updateUser)
  .delete(Controller.deleteUser);


export default usersRoutes;
