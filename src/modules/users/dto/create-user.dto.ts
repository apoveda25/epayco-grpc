import {
  IsEmail,
  IsPhoneNumber,
  IsString,
  IsMongoId,
  IsDateString,
  Length,
} from 'class-validator';

export class CreateUserDto {
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
  cellphone: string;

  @IsDateString()
  createdAt: string;

  @IsString()
  updatedAt: string;

  @IsMongoId()
  createdBy: string;

  @IsString()
  updatedBy: string;
}
