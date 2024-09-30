import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

import AppMeta from './app.meta';

const { combine, timestamp, label, printf, ms } = winston.format;

const logFormat = printf(({ level, message, timestamp, ...metadata }) => {
  const { context } = metadata;
  return JSON.stringify({
    key: `${AppMeta.appKey}_${AppMeta.componentKeys[context]}`,
    level,
    context,
    ...metadata,
    message,
    timestamp,
  });
});

export const AppLogger = WinstonModule.createLogger({
  format: combine(label({ label: 'NBT' }), timestamp(), ms(), logFormat),
  transports: [new winston.transports.Console()],
});
