import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LoggerService extends Logger {
  log(message: unknown, context?: string): void {
    super.log(message, context);
  }

  error(message: unknown, trace?: string, context?: string): void {
    super.error(message, trace, context);
  }

  warn(message: unknown, context?: string): void {
    super.warn(message, context);
  }

  debug(message: unknown, context?: string): void {
    super.debug(message, context);
  }

  verbose(message: unknown, context?: string): void {
    super.verbose(message, context);
  }
}
