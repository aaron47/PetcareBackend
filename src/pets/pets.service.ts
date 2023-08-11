import { BadRequestException, Injectable } from '@nestjs/common';
import { PetsRepository } from './pets.repository';
import { CreatePetDto } from '../dto/CreatePet.dto';
import { UsersService } from '../users/users.service';
import { UserNotFoundException } from '../exceptions/UserNotFoundException';
import { PetDocument } from '../entities/pet.schema';

@Injectable()
export class PetsService {
  constructor(
    private readonly petsRepository: PetsRepository,
    private readonly usersService: UsersService,
  ) {}

  async create(createPetDto: CreatePetDto): Promise<PetDocument> {
    await this.verifyUserExists(createPetDto.petOwner);
    return this.petsRepository.create(createPetDto);
  }

  async findAllUserPets(userEmail: string): Promise<PetDocument[]> {
    await this.verifyUserExists(userEmail);
    return this.petsRepository.findAllUserPets(userEmail);
  }

  private async verifyUserExists(userEmail: string) {
    const user = await this.usersService.findOneByEmail(userEmail);

    if (user.role !== 'owner') {
      throw new BadRequestException('User must be an owner to add a pet');
    }

    if (!user) throw new UserNotFoundException();
  }
}
