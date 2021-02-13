import { Min, IsString, IsMongoId, IsOptional } from 'class-validator';

export class SearchRechargeDto {
  @IsMongoId()
  @IsString()
  @IsOptional()
  _id?: string;

  @Min(0)
  @IsOptional()
  mount?: number;
}
