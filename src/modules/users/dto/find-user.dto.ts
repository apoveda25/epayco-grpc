import { IsString, IsMongoId } from 'class-validator';

export class FindUserDto {
  @IsMongoId()
  @IsString()
  _id: string;
}
