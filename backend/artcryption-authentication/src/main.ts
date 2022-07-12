import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';
import { Transport } from '@nestjs/microservices';
// Cookie session have some settings that don't work nicely with current tsconfig setup

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add microservice support using RabbitMQ transport
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBIT_MQ_CONNECTION],
      queue: process.env.RABBIT_MQ_QUEUE_NAME,
      queueOptions: {
        durable: true,
      },
    },
  });
  // Start microservices
  await app.startAllMicroservices();

  // Enable cors
  app.enableCors();

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('Artcryption  API')
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

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strong Parameters listing to allow defined parameters in a request
    }),
  );
  const port = process.env.PORT;

  await app.listen(port);
}
bootstrap();
