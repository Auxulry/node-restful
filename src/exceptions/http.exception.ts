import { getStatusText } from '@common/http';
import { HttpTypes } from '@declarations/http';
import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  ForbiddenException,
  HttpStatus,
  NotFoundException,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    // const request = ctx.getRequest<Request>();

    let obj: HttpTypes.ErrorResponse = {
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      status: getStatusText(HttpStatus.INTERNAL_SERVER_ERROR),
      message: 'Internal Server Error'
    };

    switch (exception.constructor) {
      case NotFoundException:
        obj = {
          code: HttpStatus.NOT_FOUND,
          status: getStatusText(HttpStatus.NOT_FOUND),
          message: exception.message + ': ' + exception.response.message
        };
        break;
      case BadRequestException: {
        // * This is custom handling message error for joi.
        // * If you change the libs validation make sure adjust this mapping message.
        // * Note: if you want to throw custom error validation use UnprocessableEntityException
        const keys = exception.response.message.map(item => item.context.key);
        const err = keys.map((item) => {
          return {
            [item]: exception.response.message.filter((sub) => sub.context.key === item).map(sub => sub.message)
          };
        });
        obj = {
          code: HttpStatus.BAD_REQUEST,
          status: getStatusText(HttpStatus.BAD_REQUEST),
          message: exception.message,
          error: err
        };
        break;
      }
      case UnprocessableEntityException:
        obj = {
          code: HttpStatus.UNPROCESSABLE_ENTITY,
          status: getStatusText(HttpStatus.UNPROCESSABLE_ENTITY),
          message: exception.message + ': ' + exception.response.message
        };
        break;
      case UnauthorizedException:
        obj = {
          code: HttpStatus.UNAUTHORIZED,
          status: getStatusText(HttpStatus.UNAUTHORIZED),
          message: exception.message + ': ' + exception.response.message
        };
        break;
      case ForbiddenException:
        obj = {
          code: HttpStatus.FORBIDDEN,
          status: getStatusText(HttpStatus.FORBIDDEN),
          message: exception.message + ': ' + exception.response.message
        };
        break;
      default:
        obj = {
          code: HttpStatus.INTERNAL_SERVER_ERROR,
          status: getStatusText(HttpStatus.INTERNAL_SERVER_ERROR),
          message: exception.message + ': ' + exception.response.message
        };
    }

    response.status(obj.code).json(obj);
  }
}
