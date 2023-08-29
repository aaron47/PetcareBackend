import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PetDocument } from '../entities/pet.schema';
import { Model } from 'mongoose';
import { CreatePetDto } from '../dto/CreatePet.dto';

@Injectable()
export class PetsRepository {
  constructor(
    @InjectModel(PetDocument.name) private petModel: Model<PetDocument>,
  ) {}

  async create(createPetDto: CreatePetDto): Promise<PetDocument> {
    const pet = new this.petModel(createPetDto);
    return pet.save();
  }

  async findPetById(petId: string): Promise<PetDocument> {
    return this.petModel.findById(petId).exec();
  }

  async findAllUserPets(userEmail: string): Promise<PetDocument[]> {
    return this.petModel.find({ petOwner: userEmail }).exec();
  }
}
