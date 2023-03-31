export function getStatusText(code: number): string {
  let msg = '';
  switch (code) {
    case 200:
      msg = 'Ok';
      break;
    case 201:
      msg = 'Created';
      break;
    case 400:
      msg = 'Bad Request';
      break;
    case 401:
      msg = 'Unauthorized';
      break;
    case 403:
      msg = 'Forbidden';
      break;
    case 404:
      msg = 'Not Found';
      break;
    case 405:
      msg = 'Method Not Allowed';
      break;
    case 408:
      msg = 'Request Timeout';
      break;
    case 409:
      msg = 'Conflict';
      break;
    case 422:
      msg = 'Unprocessable Entity';
      break;
    case 429:
      msg = 'To Many Requests';
      break;
    case 500:
      msg = 'Internal Server Error';
      break;
    case 501:
      msg = 'Not Implemented';
      break;
    case 502:
      msg = 'Bad Gateway';
      break;
    case 503:
      msg = 'Service Unavailable';
      break;
    case 504:
      msg = 'Gateway Timeout';
      break;
    default:
      break;
  }

  return msg;
}