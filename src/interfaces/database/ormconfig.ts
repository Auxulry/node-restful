import { config } from '../../config';
import { DataSource, DataSourceOptions } from 'typeorm';

console.log(`${__dirname}/../../domain/*/entities/*.entity{.ts,.js}`);
export const configOrm = {
  type: 'postgres',
  host: config.database.main.host,
  port: config.database.main.port,
  username: config.database.main.username,
  password: config.database.main.password,
  database: config.database.main.database,
  logging: process.env.NODE_ENV === 'production' ? false : true,
  entities: [`${__dirname}/../../domain/*/entities/*.entity{.ts,.js}`],
  migrations: [`${__dirname}/../../interfaces/database/migrations/*{.ts,.js}`],
  uuidExtension: 'uuid-ossp'
};

export default new DataSource(configOrm as DataSourceOptions);