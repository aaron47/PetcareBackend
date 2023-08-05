import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from '../dto/CreatePet.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post('addPet')
  async addPet(@Body() createPetDto: CreatePetDto) {
    return this.petsService.create(createPetDto);
  }

  @Get('all/:userEmail')
  async findAllUserPets(@Param('userEmail') userEmail: string) {
    return this.petsService.findAllUserPets(userEmail);
  }
}
