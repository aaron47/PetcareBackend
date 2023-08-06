import { Injectable } from '@nestjs/common';
import { ServiceDocument } from '../entities/service.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateServiceDto } from '../dto/CreateService.dto';
import { AddOfferingUserDto } from '../dto/AddOfferingUser.dto';

@Injectable()
export class ServicesRepository {
  constructor(
    @InjectModel(ServiceDocument.name)
    private readonly serviceModel: Model<ServiceDocument>,
  ) {}

  async create(createServiceDto: CreateServiceDto): Promise<ServiceDocument> {
    const service = new this.serviceModel(createServiceDto);
    return service.save();
  }

  async addOfferingUser(
    addOfferingUserDto: AddOfferingUserDto,
  ): Promise<ServiceDocument> {
    return this.serviceModel.findByIdAndUpdate(
      addOfferingUserDto.serviceId,
      { $push: { usersOfferingService: addOfferingUserDto.userEmail } },
      { new: true },
    );
  }

  async findAllServices(): Promise<ServiceDocument[]> {
    return this.serviceModel.find().exec();
  }

  async findUserServices(userEmail: string): Promise<ServiceDocument[]> {
    return this.serviceModel.find({ usersOfferingService: userEmail }).exec();
  }
}
