import { Module } from '@nestjs/common';
import { CommentairesController } from './commentaires.controller';
import { CommentairesService } from './commentaires.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CommentaireDocument,
  CommentaireSchema,
} from 'src/entities/commentaire.schema';
import { CommentairesRepository } from './commentaires.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CommentaireDocument.name, schema: CommentaireSchema },
    ]),
  ],
  controllers: [CommentairesController],
  providers: [CommentairesService, CommentairesRepository],
})
export class CommentairesModule {}
