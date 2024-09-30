import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get name(): string {
    return this.configService.get<string>('app.name');
  }
  get env(): string {
    return this.configService.get<string>('app.env');
  }
  get language(): string {
    return this.configService.get<string>('app.url');
  }
  get timezone(): number {
    return Number(this.configService.get<number>('app.timezone'));
  }
  get version(): number {
    return Number(this.configService.get<number>('app.version'));
  }
  get port(): number {
    return Number(this.configService.get<number>('app.port'));
  }
  get baseUrl(): string {
    return this.configService.get<string>('app.baseUrl');
  }
  get allowedOrigins(): string[] {
    return this.configService.get<string[]>('app.allowedOrigins');
  }
}
