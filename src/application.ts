import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { config } from './config';
import { container } from './injector/container';
import { AuthRouter } from '@routes/auth.router';
import SwaggerSpec from './third-party/swagger-ui/swagger';
import SwaggerUI from 'swagger-ui-express';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(helmet());
    this.app.use(cors());
  }

  private routes(): void {
    this.app.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(SwaggerSpec));
    this.app.use('/authentication', container.resolve<AuthRouter>('AuthRouter').router);
  }

  public start(): void {
    this.app.listen(config.port, () => {
      console.log(`Server listening on port ${config.port}`);
    });
  }
}

export default new App();
