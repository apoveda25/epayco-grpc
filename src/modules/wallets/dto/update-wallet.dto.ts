import {
  Min,
  IsString,
  IsMongoId,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class UpdateWalletDto {
  @IsMongoId()
  @IsString()
  _id: string;

  @Min(0)
  @IsOptional()
  balance?: number;

  @IsDateString()
  @IsString()
  updatedAt: string;

  @IsMongoId()
  @IsString()
  updatedBy: string;
}
