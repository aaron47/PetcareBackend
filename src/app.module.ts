import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PetsModule } from './pets/pets.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
      }),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    PetsModule,
    ServicesModule,
  ],
})
export class AppModule {}
