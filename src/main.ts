import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const GLOBAL_PREFIX = 'api';
  const PORT = 5000;
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.setGlobalPrefix(GLOBAL_PREFIX);

  await app.listen(PORT, () => {
    Logger.log(
      `Server running on port http://localhost:${PORT}/${GLOBAL_PREFIX}`,
    );
  });
}

bootstrap();
