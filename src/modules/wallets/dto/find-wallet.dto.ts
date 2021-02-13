import { IsString, IsMongoId } from 'class-validator';

export class FindWalletDto {
  @IsMongoId()
  @IsString()
  _id: string;
}
