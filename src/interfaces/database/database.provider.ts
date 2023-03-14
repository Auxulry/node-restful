import { config } from '../../config';
import { DataSource, DataSourceOptions } from 'typeorm';

const options: DataSourceOptions = {
  type: 'postgres',
  host: config.database.main.host,
  port: config.database.main.port,
  username: config.database.main.username,
  password: config.database.main.password,
  database: config.database.main.database,
  logging: process.env.NODE_ENV === 'production' ? false : true,
  entities: [`${__dirname}/../../domain/entities/*.entity.ts`],
  migrations: [`${__dirname}/../../db/migrations/*.ts`],
  uuidExtension: 'uuid-ossp'
};
export const AppMainDataSource = new DataSource(options);

export async function connectToDatabase(): Promise<DataSource> {
  const connection = await AppMainDataSource.initialize();

  return connection;
}