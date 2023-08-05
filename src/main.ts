import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const GLOBAL_PREFIX = 'api';
  app.enableCors({
    origin: '*',
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.setGlobalPrefix(GLOBAL_PREFIX);
  const configService = app.get(ConfigService);


  await app.listen(configService.get<number>('PORT'), () => {
    Logger.log(
      `Server running on port http://localhost:${configService.get<number>(
        'PORT',
      )}/${GLOBAL_PREFIX}`,
    );
  });
}

bootstrap();
