import { Injectable } from '@nestjs/common';
import { ServiceDocument } from '../entities/service.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateServiceDto } from '../dto/CreateService.dto';
import { AddOfferingUserDto } from '../dto/AddOfferingUser.dto';
import { ServiceNotFoundException } from 'src/exceptions/ServiceNotFoundException';
import { UpdateServiceDto } from 'src/dto/UpdateService.dto';

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

  async deleteService(serviceId: string): Promise<void> {
    await this.serviceModel.findByIdAndDelete(serviceId).exec();
  }

  async updateService(
    serviceId: string,
    updateServiceDto: UpdateServiceDto,
  ): Promise<ServiceDocument> {
    const service = await this.serviceModel
      .findByIdAndUpdate(serviceId, updateServiceDto, { new: true })
      .exec();
    if (!service) {
      throw new ServiceNotFoundException();
    }
    return service;
  }

  async findServiceById(serviceId: string): Promise<ServiceDocument> {
    const service = await this.serviceModel.findById(serviceId).exec();
    if (!service) {
      throw new ServiceNotFoundException();
    }
    return service;
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

  async findUsersByService(serviceId: string): Promise<string[]> {
    const service = await this.serviceModel.findById(serviceId).exec();
    if (!service) {
      throw new ServiceNotFoundException();
    }
    return service.usersOfferingService;
  }
}
