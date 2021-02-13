import { IsString, IsMongoId } from 'class-validator';

export class RemoveUserDto {
  @IsMongoId()
  @IsString()
  _id: string;
}
