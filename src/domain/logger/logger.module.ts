import { Module } from '@nestjs/common';
import { LoggerService } from './services/logger.service';

@Module({
  providers: [LoggerService]
})

export class LoggerModule { }