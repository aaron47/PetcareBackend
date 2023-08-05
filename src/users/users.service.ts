import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { UserDocument } from '../entities/user.schema';
import * as argon2 from 'argon2';
import { UserAlreadyExistsException } from '../exceptions/UserAlreadyExistsException';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const user = await this.usersRepository.findOneByEmail(createUserDto.email);

    if (user) {
      throw new UserAlreadyExistsException();
    }

    const hashedPassword = await this.hashPassword(createUserDto.password);

    return this.usersRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
  }

  async findOneByEmail(email: string): Promise<UserDocument> {
    return this.usersRepository.findOneByEmail(email);
  }

  private async hashPassword(password: string) {
    return await argon2.hash(password);
  }
}
