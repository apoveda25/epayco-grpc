import { IsEmail, Length } from 'class-validator';

export class LoginAutheticationDto {
  @IsEmail()
  email: string;

  @Length(8, 16)
  password: string;
}
