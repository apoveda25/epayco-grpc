import { IsString, IsMongoId } from 'class-validator';

export class RemoveWalletDto {
  @IsMongoId()
  @IsString()
  _id: string;
}
