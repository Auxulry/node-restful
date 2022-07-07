import { Response } from 'express';

interface IResponse {
  status: number;
  message: string;
  data: unknown;
}

const responser = (res: Response, result: IResponse) => {
  res.json(result);
  res.end();
};

export default responser;