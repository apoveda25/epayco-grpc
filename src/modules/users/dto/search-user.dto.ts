import {
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsMongoId,
  IsOptional,
} from 'class-validator';

export class SearchUserDto {
  @IsMongoId()
  @IsString()
  @IsOptional()
  _id?: string;

  @IsString()
  @IsOptional()
  document?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  surname?: string;

  @IsEmail()
  @IsString()
  @IsOptional()
  email?: string;

  @IsPhoneNumber()
  @IsString()
  @IsOptional()
  cellphone?: string;
}
