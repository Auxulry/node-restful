import { HttpTypes } from '@declarations/http';

export const defaultErrorResponse: HttpTypes.ErrorResponse = {
  code: 500,
  status: 'INTERNAL_SERVER_ERROR',
  message: 'Internal Server Error'
};