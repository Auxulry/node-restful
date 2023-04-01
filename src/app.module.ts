import { LoggerService } from '@domain/logger/services/logger.service';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './domain/user/user.module';
import { DatabaseModule } from './interfaces/database/database.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { AuthModule } from '@domain/auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService, LoggerService, LoggerMiddleware],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
