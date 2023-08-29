import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
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

  @Get('findServiceById/:serviceId')
  @HttpCode(HttpStatus.OK)
  async findServiceById(@Param('serviceId') serviceId: string) {
    return this.servicesService.findServiceById(serviceId);
  }

  @Post('addOfferingUser')
  @HttpCode(HttpStatus.CREATED)
  async addOfferingUser(
    @Body() addOfferingUserDto: AddOfferingUserDto,
  ): Promise<ServiceDocument> {
    return this.servicesService.addOfferingUser(addOfferingUserDto);
  }

  @Get('findAll')
  @HttpCode(HttpStatus.OK)
  async findAllServices(): Promise<ServiceDocument[]> {
    return this.servicesService.findAllServices();
  }

  @Get('findUserServices/:userEmail')
  @HttpCode(HttpStatus.OK)
  async findUserServices(@Param('userEmail') userEmail: string) {
    return this.servicesService.findUserServices(userEmail);
  }

  @Get('findUsersByService/:serviceId')
  @HttpCode(HttpStatus.OK)
  async findUsersByService(@Param('serviceId') serviceId: string) {
    return this.servicesService.findUsersByService(serviceId);
  }
}
