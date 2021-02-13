import {
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsMongoId,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class UpdateUserDto {
  @IsMongoId()
  @IsString()
  _id: string;

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

  @IsDateString()
  @IsString()
  updatedAt: string;

  @IsMongoId()
  @IsString()
  updatedBy: string;
}
