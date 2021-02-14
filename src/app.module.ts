import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { configApp } from './config/config-app';
import { databaseFactory } from './config/config-database';
import { UsersModule } from './modules/users/users.module';
import { WalletsModule } from './modules/wallets/wallets.module';
import { RechargesModule } from './modules/recharges/recharges.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
      load: [configApp],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: databaseFactory,
    }),
    UsersModule,
    WalletsModule,
    RechargesModule,
    PaymentsModule,
    AuthenticationModule,
    SharedModule,
  ],
})
export class AppModule {}
