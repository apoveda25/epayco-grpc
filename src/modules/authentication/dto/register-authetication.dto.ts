import {
  IsEmail,
  IsPhoneNumber,
  IsString,
  IsDateString,
  Length,
} from 'class-validator';

export class RegisterAutheticationDto {
  @IsString()
  document: string;

  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsEmail()
  email: string;

  @Length(8, 16)
  password: string;

  @IsPhoneNumber()
  @IsString()
  cellphone: string;

  @IsDateString()
  @IsString()
  createdAt: string;

  @IsString()
  updatedAt: string;

  @IsString()
  createdBy: string;

  @IsString()
  updatedBy: string;
}
