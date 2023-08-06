import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from '../dto/CreateService.dto';
import { AddOfferingUserDto } from '../dto/AddOfferingUser.dto';
import { ServiceDocument } from '../entities/service.schema';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  async createService(
    @Body() createServiceDto: CreateServiceDto,
  ): Promise<ServiceDocument> {
    return this.servicesService.createService(createServiceDto);
  }

  @Post('addOfferingUser')
  @HttpCode(HttpStatus.CREATED)
  async addOfferingUser(
    @Body() addOfferingUserDto: AddOfferingUserDto,
  ): Promise<ServiceDocument> {
    return this.servicesService.addOfferingUser(addOfferingUserDto);
  }

  @Post('findAll')
  @HttpCode(HttpStatus.OK)
  async findAllServices(): Promise<ServiceDocument[]> {
    return this.servicesService.findAllServices();
  }
}
