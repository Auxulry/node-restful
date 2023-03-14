import 'dotenv/config';

import { Config } from '@declarations/config';

export const config: Config.Base = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  database: {
    main: {
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT as string) || 5432,
      username: process.env.DB_USERNAME || 'your-username',
      password: process.env.DB_PASSWORD || 'your-password',
      database: process.env.DB_NAME || 'your-database-name',
    }
  },
};