import 'reflect-metadata';

import { connectToDatabase } from './interfaces/database/database.provider';
import app from './application';

connectToDatabase()
  .then(() => {
    console.log('Database connected');
    app.start();
  })
  .catch((error) => {
    console.log('Database connection error:', error);
  });
