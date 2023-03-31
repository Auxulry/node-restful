// import { User } from '@entities/user.entity';
import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from '../../config';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: config.database.main.host,
      port: config.database.main.port,
      username: config.database.main.username,
      password: config.database.main.password,
      database: config.database.main.database,
      logging: process.env.NODE_ENV === 'production' ? false : true,
      entities: [`${__dirname}/../../domain/*/entities/*.entity{.ts,.js}`],
      migrations: [`${__dirname}/../../db/migrations/*.ts`],
      uuidExtension: 'uuid-ossp'
    };
  }
}