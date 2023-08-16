import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserDocument } from '../entities/user.schema';
import { LoginUserDto } from '../dto/LoginUser.dto';
import * as argon2 from 'argon2';
import { UserNotFoundException } from '../exceptions/UserNotFoundException';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { AccountIsNotValidException } from '../exceptions/AccountIsNotValidException';
import { UpdateUserAccountStatusDto } from '../dto/UpdateUserAccountStatus.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  private async validateUser(
    loginUserDto: LoginUserDto,
  ): Promise<UserDocument> {
    const user = await this.usersService.findOneByEmail(loginUserDto.email);

    if (user) {
      const isPasswordValid = await this.verifyPassword(
        loginUserDto.password,
        user.password,
      );

      const isAccountStatusValid = user.accountStatus === 'active';

      // if (isPasswordValid && isAccountStatusValid) {
      //   return user;
      // }
      if (isPasswordValid) {
        return user;
      }

      // if (!isAccountStatusValid) {
      //   throw new AccountIsNotValidException();
      // }

      if (!isPasswordValid) {
        throw new UserNotFoundException();
      }
    }

    throw new UserNotFoundException();
  }

  async findUserByEmail(userEmail: string): Promise<UserDocument> {
    return this.usersService.findOneByEmail(userEmail);
  }

  async signUp(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  async login(loginUserDto: LoginUserDto): Promise<UserDocument> {
    return await this.validateUser(loginUserDto);
  }

  async updateUserAccountStatus(
    updateUserAccountStatusDto: UpdateUserAccountStatusDto,
  ) {
    return this.usersService.updateUserAccountStatus(
      updateUserAccountStatusDto,
    );
  }

  private async verifyPassword(inputPassword: string, hashedPassword: string) {
    return await argon2.verify(hashedPassword, inputPassword);
  }
}
