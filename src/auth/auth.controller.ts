import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { UserDocument } from '../entities/user.schema';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../dto/LoginUser.dto';
import { UpdateUserAccountStatusDto } from '../dto/UpdateUserAccountStatus.dto';

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

  @Get('user/:email')
  @HttpCode(HttpStatus.OK)
  async findUserByEmail(
    @Param('email') userEmail: string,
  ): Promise<UserDocument> {
    return this.authService.findUserByEmail(userEmail);
  }

  @Post('updateUserAccountStatus')
  @HttpCode(HttpStatus.OK)
  async updateUserAccountStatus(
    @Body() updateUserAccountStatusDto: UpdateUserAccountStatusDto,
  ) {
    return this.authService.updateUserAccountStatus(updateUserAccountStatusDto);
  }
}
