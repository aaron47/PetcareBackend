import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { UserDocument } from '../entities/user.schema';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../dto/LoginUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginUserDto: LoginUserDto): Promise<UserDocument> {
    return this.authService.login(loginUserDto);
  }

  @Post('signUp')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUserDto: CreateUserDto): Promise<UserDocument> {
    return this.authService.signUp(createUserDto);
  }
}
