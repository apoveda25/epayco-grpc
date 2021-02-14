import { IsMongoId } from 'class-validator';

export class FindPaymentDto {
  @IsMongoId()
  _id: string;
}
