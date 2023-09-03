import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CommentairesRepository } from './commentaires.repository';
import { CommentaireDocument } from 'src/entities/commentaire.schema';
import { CreateCommentaireDto } from 'src/dto/CreateCommentaire.dto';

@Controller('commentaires')
export class CommentairesController {
  constructor(private readonly commentaireRepository: CommentairesRepository) {}

  @Post('create')
  create(createCommentaireDto: CreateCommentaireDto) {
    return this.commentaireRepository.create(createCommentaireDto);
  }

  @Get()
  findAll(): Promise<CommentaireDocument[]> {
    return this.commentaireRepository.findAll();
  }

  @Get('user/:id')
  findByUser(@Param('id') id: string) {
    return this.commentaireRepository.findByUser(id);
  }

  @Get('publication/:id')
  findAllByPublicationId(
    @Param('id') publicationId: string,
  ): Promise<CommentaireDocument[]> {
    return this.commentaireRepository.findAllByPublicationId(publicationId);
  }

  @Get('id/:id')
  findById(@Param('id') id: string): Promise<CommentaireDocument> {
    return this.commentaireRepository.findById(id);
  }

  @Put(':id/update')
  update(
    @Param('id') id: string,
    commentaire: string,
  ): Promise<CommentaireDocument> {
    return this.commentaireRepository.update(id, commentaire);
  }

  @Delete(':id/delete')
  delete(@Param('id') id: string): Promise<CommentaireDocument> {
    return this.commentaireRepository.delete(id);
  }
}
