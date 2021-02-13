import {
  Min,
  IsString,
  IsMongoId,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class UpdateRechargeDto {
  @IsMongoId()
  @IsString()
  _id: string;

  @Min(0)
  @IsOptional()
  mount?: number;

  @IsDateString()
  @IsString()
  updatedAt: string;

  @IsMongoId()
  @IsString()
  updatedBy: string;
}
