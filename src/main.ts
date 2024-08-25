import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwaggerDocuments } from './config/swagger';
import { ValidationPipe } from '@nestjs/common';
import { configService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe());
  setupSwaggerDocuments(app);
  await app.listen(configService.getPort());
}
bootstrap();
