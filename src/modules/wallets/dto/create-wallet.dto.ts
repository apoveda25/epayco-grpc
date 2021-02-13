import { IsString, IsMongoId, IsDateString, Min } from 'class-validator';

export class CreateWalletDto {
  @Min(0)
  balance: number;

  @IsDateString()
  @IsString()
  createdAt: string;

  @IsString()
  updatedAt: string;

  @IsMongoId()
  @IsString()
  createdBy: string;

  @IsString()
  updatedBy: string;
}
