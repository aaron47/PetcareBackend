import { Module } from '@nestjs/common';
import { OffresController } from './offres.controller';
import { OffresService } from './offres.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OffreDocument, OffreSchema } from 'src/entities/offre.schema';
import { OffresRepository } from './offres.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OffreDocument.name, schema: OffreSchema },
    ]),
  ],
  controllers: [OffresController],
  providers: [OffresService, OffresRepository],
})
export class OffresModule {}
