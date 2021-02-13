import { Min, IsString, IsMongoId, IsDateString } from 'class-validator';

export class CreateRechargeDto {
  @Min(0)
  mount: number;

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
