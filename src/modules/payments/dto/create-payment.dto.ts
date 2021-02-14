import {
  IsBoolean,
  Matches,
  IsString,
  IsMongoId,
  IsDateString,
  Min,
  IsOptional,
} from 'class-validator';

export class CreatePaymentDto {
  @Min(0)
  mount: number;

  @IsBoolean()
  verified = false;

  @Matches(/^[\d]{6}$/)
  code: string;

  @IsString()
  sesionId: string;

  @IsDateString()
  createdAt: string;

  @IsString()
  updatedAt: string;

  @IsMongoId()
  createdBy: string;

  @IsString()
  updatedBy: string;

  @IsMongoId()
  @IsOptional()
  wallet?: string;
}
