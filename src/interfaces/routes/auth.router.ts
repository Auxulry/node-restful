import { Router } from 'express';
import { inject, injectable } from 'tsyringe';
import { Auth } from '@declarations/auth';

@injectable()
export class AuthRouter {
  public router: Router;

  constructor(@inject('AuthController') private readonly authController: Auth.ControllerInterface) {
    this.router = Router();
    this.authController = authController;
    this.routes();
  }

  private routes(): void {
    /**
     * @swagger
     * components:
     *  schemas:
     *    authenticationResponse:
     *      type: object
     *      properties:
     *        accessToken:
     *          type: string
     *    errorResponse:
     *      type: object
     *      properties:
     *        code:
     *          type: number
     *        status:
     *          type: string
     *        message:
     *          type: string
     *
     * /authentication/login:
     *  post:
     *    tags:
     *      - Authentication
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
     *              email:
     *                type: string
     *              password:
     *                type: string
     *    responses:
     *      200:
     *        description: Successful Login
     *        content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                code:
     *                  type: number
     *                status:
     *                  type: string
     *                message:
     *                  type: string
     *                data:
     *                  $ref: "#/components/schemas/authenticationResponse"
     *      404:
     *        description: User Not Found
     *        content:
     *          application/json:
     *            schema:
     *              $ref: "#/components/schemas/errorResponse"
     *      401:
     *        description: Invalid email or password
     *        content:
     *          application/json:
     *            schema:
     *              $ref: "#/components/schemas/errorResponse"
     *      500:
     *        description: Internal Server Error
     *        content:
     *          application/json:
     *            schema:
     *              $ref: "#/components/schemas/errorResponse"
     * /authentication/register:
     *  post:
     *    tags:
     *      - Authentication
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
     *              name:
     *                type: string
     *              email:
     *                type: string
     *              password:
     *                type: string
     *    responses:
     *      200:
     *        description: Successful Login
     *        content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                code:
     *                  type: number
     *                status:
     *                  type: string
     *                message:
     *                  type: string
     *                data:
     *                  $ref: "#/components/schemas/authenticationResponse"
     *      404:
     *        description: User Not Found
     *        content:
     *          application/json:
     *            schema:
     *              $ref: "#/components/schemas/errorResponse"
     *      419:
     *        description: User already registered
     *        content:
     *          application/json:
     *            schema:
     *              $ref: "#/components/schemas/errorResponse"
     *      500:
     *        description: Internal Server Error
     *        content:
     *          application/json:
     *            schema:
     *              $ref: "#/components/schemas/errorResponse"
     */
    this.router.post('/login', this.authController.login);
    this.router.post('/register', this.authController.register);
  }
}