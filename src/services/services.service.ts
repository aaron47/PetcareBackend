import { Injectable } from '@nestjs/common';
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

  private async verifyUserExists(userEmail: string) {
    const user = await this.usersService.findOneByEmail(userEmail);

    if (!user) throw new UserNotFoundException();
  }
}
