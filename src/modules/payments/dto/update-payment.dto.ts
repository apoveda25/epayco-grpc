import {
  IsBoolean,
  Min,
  IsMongoId,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class UpdatePaymentDto {
  @IsMongoId()
  _id: string;

  @Min(0)
  @IsOptional()
  mount?: number;

  @IsBoolean()
  @IsOptional()
  verified?: boolean;

  @IsDateString()
  updatedAt: string;

  @IsMongoId()
  updatedBy: string;
}
