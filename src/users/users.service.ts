import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { UserDocument } from '../entities/user.schema';
import * as argon2 from 'argon2';
import { UserAlreadyExistsException } from '../exceptions/UserAlreadyExistsException';
import { UpdateUserAccountStatusDto } from '../dto/UpdateUserAccountStatus.dto';
import { UserNotFoundException } from '../exceptions/UserNotFoundException';
import { UpdateUserDto } from 'src/dto/UpdateUser.dto';

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
      accountStatus: 'pending',
      password: hashedPassword,
    });
  }

  async findAll() {
    return this.usersRepository.findAll();
  }

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserDocument> {
    return this.usersRepository.updateUser(id, updateUserDto);
  }

  async deleteUser(id: string): Promise<UserDocument> {
    return this.usersRepository.deleteUser(id);
  }

  async findOneByEmail(email: string): Promise<UserDocument> {
    return this.usersRepository.findOneByEmail(email);
  }

  async findOneById(id: string): Promise<UserDocument> {
    return this.usersRepository.findOneById(id);
  }

  async updateUserAccountStatus(
    updateUserAccountStatusDto: UpdateUserAccountStatusDto,
  ) {
    await this.verifyIsUserAdmin(updateUserAccountStatusDto.adminEmail);

    return this.usersRepository.updateUserStatusByEmail(
      updateUserAccountStatusDto.userEmail,
      updateUserAccountStatusDto.status,
    );
  }

  private async verifyIsUserAdmin(adminEmail: string) {
    const user = await this.usersRepository.findOneByEmail(adminEmail);

    if (user.role !== 'admin') {
      throw new BadRequestException('User is not admin');
    }

    if (!user) {
      throw new UserNotFoundException();
    }
  }

  private async hashPassword(password: string) {
    return await argon2.hash(password);
  }
}
