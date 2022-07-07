import { IRouter, Router } from 'express';
import authRoutes from './auth.route';
import usersRoutes from './users.route';

// * Routes Interface
interface RoutesInterface {
  path: string;
  name: string;
  route: IRouter;
}

const router: IRouter = Router();

// * Define Routes
export const configRoutes: Array<RoutesInterface> = [
  {
    path: '/auth',
    name: 'Authentication',
    route: authRoutes
  },
  {
    path: '/users',
    name: 'Users',
    route: usersRoutes
  }
];

// * Configure Routes
configRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;