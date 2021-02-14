import {
  Min,
  IsMongoId,
  IsOptional,
  IsBoolean,
  Matches,
} from 'class-validator';

export class SearchPaymentDto {
  @IsMongoId()
  @IsOptional()
  _id?: string;

  @Min(0)
  @IsOptional()
  mount?: number;

  @IsBoolean()
  @IsOptional()
  verified?: boolean;

  @Matches(/^[\d]{6}$/)
  @IsOptional()
  code?: string;
}
