import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PetDocument, PetSchema } from '../entities/pet.schema';
import { PetsRepository } from './pets.repository';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PetDocument.name, schema: PetSchema }]),
    UsersModule
  ],
  providers: [PetsService, PetsRepository],
  controllers: [PetsController],
})
export class PetsModule {}
