import { Request, Response } from 'express';
import UserServices from '../services/users.service';
import ApiController from './api.controller';
import * as dotenv from 'dotenv';
import DB from '../config/database';

dotenv.config();

class UsersController extends ApiController {
  constructor() {
    super();
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
    const queries = DB.query('SELECT * FROM user').then((res) => {
      console.log(res, 'res');
      return res;
    }).catch((err) => {
      console.log(err, 'err');
      return err;
    });
    console.log(queries, 'queries');
    const data = users.getUsers();
    this.response(res, {
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
    this.response(res, {
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
    this.response(res, {
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
    this.response(res, {
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
    this.response(res, {
      status: 200,
      message: `DELETE requested for id ${req.params.id}`,
      data: null
    });
  }
}

export default UsersController;