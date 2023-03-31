import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { LoggerService } from '@domain/logger/services/logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: LoggerService) { }

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl: url, ip: remoteAddress } = req;
    const userAgent = req.get('user-agent') || '';

    this.logger.log(
      `${method} ${url} ${userAgent} ${remoteAddress}`, 'Request'
    );
    res.on('finish', () => {
      const { statusCode } = res;
      const contentLength = res.get('content-length');
      this.logger.log(
        `${method} ${url} ${statusCode} ${contentLength} - ${userAgent} ${remoteAddress}`, 'Response'
      );
    });

    next();
  }
}