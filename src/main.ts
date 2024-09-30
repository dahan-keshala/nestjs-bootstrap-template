import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app-config/app-config.service';
import { AppLogger } from './app.logger';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  API_DESCRIPTION,
  API_TITLE,
  API_VERSION,
} from './shared/constants/swagger.constants';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: AppLogger,
  });

  const appConfig: AppConfigService = app.get(AppConfigService);

  const allowedOrigins: string[] = appConfig.allowedOrigins;
  const port: number = appConfig.port;

  app.enableCors({
    origin: allowedOrigins,
  });

  app.enableVersioning({
    type: VersioningType.URI,
  });

  const config = new DocumentBuilder()
    .setTitle(API_TITLE)
    .setDescription(API_DESCRIPTION)
    .setVersion(API_VERSION)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(':version/api-docs', app, document);

  await app.listen(port);
}
bootstrap();
