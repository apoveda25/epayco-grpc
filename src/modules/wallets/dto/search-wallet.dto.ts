import { Min, IsString, IsMongoId, IsOptional } from 'class-validator';

export class SearchWalletDto {
  @IsMongoId()
  @IsString()
  @IsOptional()
  _id?: string;

  @Min(0)
  @IsOptional()
  balance?: number;
}
