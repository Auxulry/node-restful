import { Request, Response } from 'express';
import UserServices from '../services/users.service';
import responser from '../utils/responser';

class UsersController {
  constructor() {
    this.getListOfUsers = this.getListOfUsers.bind(this);
    this.createUser = this.createUser.bind(this);
    this.findUser = this.findUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  /**
   *
   * Get List Of Users
   *
   * @param req
   * @param res
   */
  getListOfUsers(req: Request, res: Response): void {
    const users = new UserServices();

    const data = users.getUsers();
    responser(res, {
      status: 200,
      message: 'Get List Of Users',
      data: data
    });
  }

  /**
   *
   * Create User
   *
   * @param req
   * @param res
   */
  createUser(req: Request, res: Response): void {
    responser(res, {
      status: 201,
      message: 'Create User Posted',
      data: null
    });
  }

  /**
   *
   * Find User
   *
   * @param req
   * @param res
   */
  findUser(req: Request, res: Response): void {
    responser(res, {
      status: 200,
      message: `GET requested for id ${req.params.id}`,
      data: null
    });
  }

  /**
   *
   * Update User
   *
   * @param req
   * @param res
   */
  updateUser(req: Request, res: Response): void {
    responser(res, {
      status: 200,
      message: `PUT requested for id ${req.params.id}`,
      data: null
    });
  }

  /**
   *
   * Delete User
   *
   * @param req
   * @param res
   */
  deleteUser(req: Request, res: Response): void {
    responser(res, {
      status: 200,
      message: `DELETE requested for id ${req.params.id}`,
      data: null
    });
  }
}

export default UsersController;