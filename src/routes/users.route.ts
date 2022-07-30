import { IRouter, NextFunction, Request, Response, Router } from 'express';
import UsersController from '../controllers/users.controller';
import authenticated from '../middlewares/auth';

const usersRoutes: IRouter = Router();

const Controller = new UsersController();

// * List Of Users Routes
usersRoutes
  .route('/')
  .all((req: Request, res: Response, next: NextFunction) => {
    authenticated(req, res, next);
  })
  .get(Controller.getListOfUsers)
  .post(Controller.createUser);

usersRoutes
  .route('/:id')
  .all((req: Request, res: Response, next: NextFunction) => {
    authenticated(req, res, next);
  })
  .get(Controller.findUser)
  .put(Controller.updateUser)
  .delete(Controller.deleteUser);


export default usersRoutes;
