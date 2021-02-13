import {
  IsEmail,
  IsPhoneNumber,
  IsString,
  IsMongoId,
  IsDateString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  document: string;

  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsPhoneNumber()
  @IsString()
  cellphone: string;

  @IsDateString()
  @IsString()
  createdAt: string;

  @IsString()
  updatedAt: string;

  @IsMongoId()
  @IsString()
  createdBy: string;

  @IsString()
  updatedBy: string;
}
