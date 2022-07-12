import { Response } from 'express';

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
}

export default ApiController;