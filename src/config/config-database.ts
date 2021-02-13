import { ConfigService } from '@nestjs/config';

export const databaseFactory = (configService: ConfigService) => ({
  user: configService.get('db.mongodb.username'),
  pass: configService.get('db.mongodb.password'),
  dbName: configService.get('db.mongodb.database'),
  appname: configService.get('app.name'),
  uri: configService.get('db.mongodb.uri'),
});
