import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { UsersModule } from '../users/users.module';
import { Hashing } from '../../shared/providers/hashing';
import { SharedModule } from '../../shared/shared.module';

@Module({
  imports: [UsersModule, SharedModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, Hashing],
})
export class AuthenticationModule {}
