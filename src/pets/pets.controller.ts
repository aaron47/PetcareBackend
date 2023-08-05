import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from '../dto/CreatePet.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post('addPet')
  @HttpCode(HttpStatus.CREATED)
  async addPet(@Body() createPetDto: CreatePetDto) {
    return this.petsService.create(createPetDto);
  }

  @Get('all/:userEmail')
  @HttpCode(HttpStatus.OK)
  async findAllUserPets(@Param('userEmail') userEmail: string) {
    return this.petsService.findAllUserPets(userEmail);
  }
}
