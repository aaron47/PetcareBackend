import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OffresRepository } from './offres.repository';
import { CreateOffreDto } from 'src/dto/CreateOffre.dto';
import { UpdateOffreDto } from 'src/dto/UpdateOffre.dto';

@Controller('offres')
export class OffresController {
  constructor(private readonly offresRepository: OffresRepository) {}

  @Post('create')
  async create(@Body() createOffreDto: CreateOffreDto) {
    return this.offresRepository.create(createOffreDto);
  }

  @Get('')
  async findAll() {
    return this.offresRepository.findAll();
  }

  @Get('service/:id')
  async findOffresByService(@Param('id') id: string) {
    return this.offresRepository.findOffresByService(id);
  }

  @Get('user/:id')
  async findOffresByUser(@Param('id') id: string) {
    return this.offresRepository.findOffresByUser(id);
  }

  @Post(':id/update')
  async update(
    @Param('id') id: string,
    @Body() updateOffreDto: UpdateOffreDto,
  ) {
    return this.offresRepository.update(id, updateOffreDto);
  }

  @Post(':id/delete')
  async delete(@Param('id') id: string) {
    return this.offresRepository.delete(id);
  }
}
