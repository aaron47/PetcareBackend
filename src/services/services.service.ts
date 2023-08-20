import { BadRequestException, Injectable } from '@nestjs/common';
import { ServicesRepository } from './services.repository';
import { ServiceDocument } from '../entities/service.schema';
import { CreateServiceDto } from '../dto/CreateService.dto';
import { AddOfferingUserDto } from '../dto/AddOfferingUser.dto';
import { UsersService } from '../users/users.service';
import { UserNotFoundException } from '../exceptions/UserNotFoundException';

@Injectable()
export class ServicesService {
  constructor(
    private readonly servicesRepository: ServicesRepository,
    private readonly usersService: UsersService,
  ) {}

  async createService(
    createServiceDto: CreateServiceDto,
  ): Promise<ServiceDocument> {
    await this.verifyUserExists(createServiceDto.userEmail);

    return this.servicesRepository.create(createServiceDto);
  }

  async addOfferingUser(
    addOfferingUserDto: AddOfferingUserDto,
  ): Promise<ServiceDocument> {
    await this.verifyUserExists(addOfferingUserDto.userEmail);
    return this.servicesRepository.addOfferingUser(addOfferingUserDto);
  }

  async findAllServices(): Promise<ServiceDocument[]> {
    return this.servicesRepository.findAllServices();
  }

  async findUserServices(userEmail: string): Promise<ServiceDocument[]> {
    await this.verifyUserExists(userEmail);
    return this.servicesRepository.findUserServices(userEmail);
  }

  async findUsersByService(serviceId: string): Promise<string[]> {
    return this.servicesRepository.findUsersByService(serviceId);
  }

  private async verifyUserExists(userEmail: string) {
    const user = await this.usersService.findOneByEmail(userEmail);

    if (user.role !== 'sitter') {
      throw new BadRequestException('User must be a sitter to add a service');
    }

    if (!user) throw new UserNotFoundException();
  }
}
