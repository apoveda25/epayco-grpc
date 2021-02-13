import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        // package: ['user', 'wallet', 'recharge'],
        package: ['user'],
        protoPath: [
          join(__dirname, 'modules/users/user.proto'),
          // join(__dirname, 'modules/wallets/wallet.proto'),
          // join(__dirname, 'modules/recharges/recharge.proto'),
        ],
        url: process.env.APP_SERVICE_URL || 'localhost:3010',
      },
    },
  );
  await app.listenAsync();
}
bootstrap();
