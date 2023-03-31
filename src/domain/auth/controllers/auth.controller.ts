import { getStatusText } from '@common/http';
import { BaseController } from '@domain/controller';
import { HttpExceptionFilter } from '@exceptions/http.exception';
import { BadRequestException, Body, Controller, HttpStatus, Post, Res, UseFilters } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthResponse, LoginRequest, LoginSchema, RegisterRequest, RequestSchema } from '../schemas/auth.schema';
import { AuthService } from '../services/auth.service';

@Controller('uthentication')
@UseFilters(HttpExceptionFilter)
export class AuthController extends BaseController {
  constructor(private readonly authService: AuthService) {
    super();
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  @ApiCreatedResponse({
    description: 'Register',
    type: AuthResponse
  })
  @Post('/register')
  @ApiTags('Authentication')
  async register(@Body() req: RegisterRequest, @Res() res: Response): Promise<Response> {
    const { error } = this.validate(req, RequestSchema);
    if (error) {
      throw new BadRequestException(error.details);
    }

    const data = await this.authService.register(req);

    return res.status(HttpStatus.OK).json({
      code: HttpStatus.CREATED,
      status: getStatusText(HttpStatus.CREATED),
      message: 'Register Success',
      data: {
        accessToken: data.accessToken
      }
    });
  }

  @ApiOkResponse({
    description: 'Login',
    type: AuthResponse
  })
  @Post('/login')
  @ApiTags('Authentication')
  async login(@Body() req: LoginRequest, @Res() res: Response): Promise<Response> {
    const { error } = this.validate(req, LoginSchema);
    if (error) {
      throw new BadRequestException(error.details);
    }

    const data = await this.authService.login(req);

    return this.successResponse<AuthResponse>(res, HttpStatus.OK, {
      code: HttpStatus.OK,
      status: getStatusText(HttpStatus.OK),
      message: 'Login Success',
      data
    });
  }
}
