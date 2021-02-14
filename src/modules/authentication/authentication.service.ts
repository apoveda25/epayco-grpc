import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { RegisterAutheticationDto } from './dto/register-authetication.dto';
import { UsersService } from '../users/users.service';
import { LoginAutheticationDto } from './dto/login-authetication.dto';
import { Hashing } from '../../shared/providers/hashing';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly usersService: UsersService,
    private readonly hashing: Hashing,
  ) {}

  async register(registerAuthenticationDto: RegisterAutheticationDto) {
    return this.usersService.create(registerAuthenticationDto);
  }

  async login({ email, password }: LoginAutheticationDto) {
    const user = await this.usersService.find({ email });

    try {
      if (this.hashing.compare(password, user.password)) return user;

      throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
