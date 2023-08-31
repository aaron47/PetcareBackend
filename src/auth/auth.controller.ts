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
import { UpdateUserDto } from 'src/dto/UpdateUser.dto';

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

  @Post('user/delete/:id')
  @HttpCode(HttpStatus.OK)
  async deleteUser(@Param('id') id: string) {
    return this.authService.deleteUser(id);
  }

  @Post('user/update/:id')
  @HttpCode(HttpStatus.OK)
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserDocument> {
    return this.authService.updateUser(id, updateUserDto);
  }

  @Get('user/:email')
  @HttpCode(HttpStatus.OK)
  async findUserByEmail(
    @Param('email') userEmail: string,
  ): Promise<UserDocument> {
    return this.authService.findUserByEmail(userEmail);
  }

  @Get('user/id/:id')
  @HttpCode(HttpStatus.OK)
  async findUserById(@Param('id') id: string): Promise<UserDocument> {
    return this.authService.findUserById(id);
  }

  @Post('updateUserAccountStatus')
  @HttpCode(HttpStatus.OK)
  async updateUserAccountStatus(
    @Body() updateUserAccountStatusDto: UpdateUserAccountStatusDto,
  ) {
    return this.authService.updateUserAccountStatus(updateUserAccountStatusDto);
  }
}
