import { IsString, IsMongoId } from 'class-validator';

export class FindRechargeDto {
  @IsMongoId()
  @IsString()
  _id: string;
}
