import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';

import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable cors
  app.enableCors();

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('Artcryption Assets Management  APIs')
    .setDescription('The Short Artcryption  API description')
    .setVersion('1.0')
    .addTag('Artcryption')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);

  fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));

  SwaggerModule.setup('api', app, document);

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strong Parameters listing to allow defined parameters in a request
    }),
  );

  await app.listen(3000);
}
bootstrap();
