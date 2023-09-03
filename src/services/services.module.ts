import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceDocument, ServiceSchema } from '../entities/service.schema';
import { ServicesRepository } from './services.repository';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ServiceDocument.name, schema: ServiceSchema },
    ]),
    UsersModule,
  ],
  exports: [ServicesRepository],
  controllers: [ServicesController],
  providers: [ServicesService, ServicesRepository],
})
export class ServicesModule {}
