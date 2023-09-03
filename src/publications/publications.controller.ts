import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PublicationsRepository } from './publications.repository';
import { CreatePublicationDto } from '../dto/CreatePublication.dto';
import { UpdatePublicationDto } from '../dto/UpdatePublication.dto';

@Controller('publications')
export class PublicationsController {
  constructor(
    private readonly publicationsRepository: PublicationsRepository,
  ) {}

  @Post('create')
  create(@Body() createPublicationDto: CreatePublicationDto) {
    return this.publicationsRepository.create(createPublicationDto);
  }

  @Get()
  findAll() {
    return this.publicationsRepository.findAll();
  }

  @Get('user/:id')
  findPublicationsByUser(@Param('id') id: string) {
    return this.publicationsRepository.findPublicationsByUser(id);
  }

  @Put(':id/update')
  update(
    @Param('id') publicationId: string,
    @Body() updatePublicationDto: UpdatePublicationDto,
  ) {
    return this.publicationsRepository.update(
      publicationId,
      updatePublicationDto,
    );
  }

  @Delete(':id/delete')
  delete(@Param('id') publicationId: string) {
    return this.publicationsRepository.delete(publicationId);
  }
}
