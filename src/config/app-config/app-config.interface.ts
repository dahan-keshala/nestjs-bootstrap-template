export interface IAppConfig {
  name: string;
  env: string;
  port: number;
  baseUrl: string;
  debug: boolean;
  allowedOrigins: string[];
}
