import { Injectable } from '@nestjs/common';
import { PetsRepository } from './pets.repository';
import { CreatePetDto } from '../dto/CreatePet.dto';
import { UsersService } from '../users/users.service';
import { UserNotFoundException } from '../exceptions/UserNotFoundException';

@Injectable()
export class PetsService {
  constructor(
    private readonly petsRepository: PetsRepository,
    private readonly usersService: UsersService,
  ) {}

  async create(createPetDto: CreatePetDto) {
    await this.verifyUserExists(createPetDto.petOwner);
    return this.petsRepository.create(createPetDto);
  }

  async findAllUserPets(userEmail: string) {
    await this.verifyUserExists(userEmail);
    return this.petsRepository.findAllUserPets(userEmail);
  }

  private async verifyUserExists(userEmail: string) {
    const user = await this.usersService.findOneByEmail(userEmail);

    if (!user) throw new UserNotFoundException();
  }
}
