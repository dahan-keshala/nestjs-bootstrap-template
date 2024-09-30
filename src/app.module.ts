import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { AppConfigModule } from './config/app-config/app-config.module';

@Module({
  imports: [ConfigModule, AppConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
