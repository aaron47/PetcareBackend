import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from '../entities/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/CreateUser.dto';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(UserDocument.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const user = new this.userModel(createUserDto);
    return user.save();
  }

  async findOneByEmail(email: string): Promise<UserDocument> {
    return this.userModel.findOne({ email });
  }

  async findOneByRole(role: string): Promise<UserDocument[]> {
    return this.userModel.find({ role });
  }

  async updateUserStatusByEmail(
    email: string,
    update: string,
  ): Promise<UserDocument> {
    return this.userModel.findOneAndUpdate(
      { email },
      { $set: { status: update } },
      { new: true },
    );
  }
}
