import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

function getMongoOptions() {
  return {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
}

function getUri(configService: ConfigService) {
  return (
    'mongodb://' +
    configService.get('MONGO_LOGIN') +
    ':' +
    configService.get('MONGO_PASSWORD') +
    '@' +
    configService.get('MONGO_HOST') +
    ':' +
    configService.get('MONGO_PORT') +
    '/' +
    configService.get('MONGO_AUTH_DATABASE')
  );
}

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
  return {
    uri: getUri(configService),
    ...getMongoOptions(),
  };
};
