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
import { PetDocument } from '../entities/pet.schema';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post('addPet')
  @HttpCode(HttpStatus.CREATED)
  async addPet(@Body() createPetDto: CreatePetDto): Promise<PetDocument> {
    return this.petsService.create(createPetDto);
  }

  @Get('find/:petId')
  @HttpCode(HttpStatus.OK)
  async findPetById(@Param('petId') petId: string): Promise<PetDocument> {
    return this.petsService.findPetById(petId);
  }

  @Get('all/:userEmail')
  @HttpCode(HttpStatus.OK)
  async findAllUserPets(
    @Param('userEmail') userEmail: string,
  ): Promise<PetDocument[]> {
    return this.petsService.findAllUserPets(userEmail);
  }
}
