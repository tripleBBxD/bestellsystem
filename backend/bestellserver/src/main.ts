import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { error } from 'console';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console
  });
  app.enableCors()
  await app.listen(3000);
}
bootstrap();
