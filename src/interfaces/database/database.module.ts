import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { databaseProviders } from './database.providers';
import { DatabaseService } from './database.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseService
    }),
  ]
})
export class DatabaseModule { }