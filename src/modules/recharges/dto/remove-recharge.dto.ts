import { IsString, IsMongoId } from 'class-validator';

export class RemoveRechargeDto {
  @IsMongoId()
  @IsString()
  _id: string;
}
