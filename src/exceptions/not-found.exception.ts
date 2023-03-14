import { HttpException } from './http.exception';

export class NotFoundException extends HttpException {
  constructor(message: string) {
    super(404, 'NOT_FOUND', message);
  }
}