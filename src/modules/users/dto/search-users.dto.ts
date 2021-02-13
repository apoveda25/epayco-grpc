import { UserDocument } from '../entities/user.entity';

export interface SearchUsersDto {
  users: UserDocument[];
}
