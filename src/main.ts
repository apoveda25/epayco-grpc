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
        package: ['authentication', 'user', 'wallet', 'recharge', 'payment'],
        protoPath: [
          join(__dirname, 'modules/authentication/authentication.proto'),
          join(__dirname, 'modules/users/user.proto'),
          join(__dirname, 'modules/wallets/wallet.proto'),
          join(__dirname, 'modules/recharges/recharge.proto'),
          join(__dirname, 'modules/payments/payment.proto'),
        ],
        url: process.env.APP_SERVICE_URL || 'localhost:3010',
      },
    },
  );
  await app.listenAsync();
}
bootstrap();
