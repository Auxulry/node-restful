import { UserRepository } from '@repositories/user.repository';
import { AuthUsecase } from '@usecases/auth.usecase';
import { AuthController } from '@controllers/auth.controller';
import { AuthRouter } from '../interfaces/routes/auth.router';
import { container } from 'tsyringe';

container.register<typeof UserRepository>('UserRepository', { useValue: UserRepository });
container.register('AuthUsecase', { useClass: AuthUsecase });
container.register('AuthController', { useClass: AuthController });
container.register('AuthRouter', { useClass: AuthRouter });

export { container };