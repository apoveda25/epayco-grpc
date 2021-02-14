import { IsMongoId } from 'class-validator';

export class RemovePaymentDto {
  @IsMongoId()
  _id: string;
}
