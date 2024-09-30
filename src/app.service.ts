import { Injectable } from '@nestjs/common';
import { AppConfigService } from './config/app-config/app-config.service';

@Injectable()
export class AppService {
  private appName: string;
  constructor(private appConfig: AppConfigService) {
    this.appName = this.appConfig.name;
  }
  getHello(): string {
    return this.appName;
  }
}
