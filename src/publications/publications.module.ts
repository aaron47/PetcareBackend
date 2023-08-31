import { Module } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { PublicationsController } from './publications.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PublicationDocument,
  PublicationSchema,
} from 'src/entities/publication.schema';
import { PublicationsRepository } from './publications.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PublicationDocument.name, schema: PublicationSchema },
    ]),
  ],
  providers: [PublicationsService, PublicationsRepository],
  controllers: [PublicationsController],
})
export class PublicationsModule {}
