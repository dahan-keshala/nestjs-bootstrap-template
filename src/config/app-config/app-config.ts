import { registerAs } from '@nestjs/config';

import * as Joi from 'joi';

import JoiUtil, { JoiConfig } from 'src/config/joi-util';

import ConfigUtil from 'src/config/config-util';

import { IAppConfig } from './app-config.interface';

const path = '/app-config/app-config.json';

export default registerAs('app', (): IAppConfig => {
  const configValue: IAppConfig = ConfigUtil.readSync(path);

  const configs: JoiConfig<IAppConfig> = {
    name: {
      value: configValue.name,
      joi: Joi.string().required(),
    },
    env: {
      value: configValue.env,
      joi: Joi.string().required(),
    },
    port: {
      value: configValue.port,
      joi: Joi.number().required(),
    },
    baseUrl: {
      value: configValue.baseUrl,
      joi: Joi.string().required(),
    },
    debug: {
      value: configValue.debug,
      joi: Joi.boolean().default(false),
    },
    allowedOrigins: {
      value: configValue.allowedOrigins,
      joi: Joi.array().items(Joi.string()).default([]),
    },
  };

  // If the validation is valid, then the "error" will be
  // undefined and this will return successfully.
  return JoiUtil.validate(configs);
});
