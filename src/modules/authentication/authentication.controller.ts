import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthenticationService } from './authentication.service';
import { RegisterAutheticationDto } from './dto/register-authetication.dto';
import { HashPasswordPipe } from '../../shared/pipes/hash-password.pipe';
import { UserDocument } from '../users/entities/user.entity';
import { LoginAutheticationDto } from './dto/login-authetication.dto';
import { RegisterClientPipe } from './pipes/register-client.pipe';

@Controller()
export class AuthenticationController {
  constructor(private readonly autheticationService: AuthenticationService) {}

  @UsePipes(RegisterClientPipe, ValidationPipe, HashPasswordPipe)
  @GrpcMethod('AuthenticationService', 'register')
  async register(data: RegisterAutheticationDto): Promise<UserDocument> {
    return await this.autheticationService.register(data);
  }

  @UsePipes(ValidationPipe)
  @GrpcMethod('AuthenticationService', 'login')
  async login(data: LoginAutheticationDto): Promise<UserDocument> {
    return await this.autheticationService.login(data);
  }
}
