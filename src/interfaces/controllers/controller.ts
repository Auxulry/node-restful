import { Response } from 'express';
import { HttpException } from '@exceptions/http.exception';
import { HttpTypes } from '@declarations/http';

export class Controller {
  errorResponse(res: Response, resBody: HttpTypes.ErrorResponse | unknown): Response {
    if (resBody instanceof HttpException) {
      return res.status(resBody.code).json({
        code: resBody.code,
        status: resBody.status,
        message: resBody.message
      });
    }
    return res.status(500).json({
      code: 500,
      status: 'INTERNAL_SERVER_ERROR',
      message: 'Internal Server Error'
    });
  }

  successResponse<T>(res: Response, resBody: HttpTypes.SuccessResponse<T>): Response {
    return res.status(resBody.code).json({
      code: resBody.code,
      status: resBody.status,
      message: resBody.message,
      data: resBody.data
    });
  }
}