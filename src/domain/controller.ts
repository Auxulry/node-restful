import { Res } from '@nestjs/common';
import { Response } from 'express';
import * as Joi from 'joi';

export class BaseController {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate(value: any, schema: Joi.ObjectSchema<any>): Joi.ValidationResult<any> {
    return schema.validate(value, { abortEarly: false });
  }

  async successResponse<T>(@Res() res: Response, code: number, body?: T): Promise<Response> {
    return res.status(code).json(body);
  }
}