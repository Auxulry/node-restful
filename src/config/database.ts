import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const DB = new Pool({
  user: process.env.DB_USERNAME || '',
  host: process.env.DB_HOST || '127.0.0.1',
  database: process.env.DB_NAME || 'example',
  password: process.env.DB_PASSWORD || 'example',
  port: Number(process.env.DB_PORT) || 5432
});

export default DB;

