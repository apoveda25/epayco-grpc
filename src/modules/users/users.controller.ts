import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument } from './entities/user.entity';
import { SearchUserDto } from './dto/search-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { RemoveUserDto } from './dto/remove-user.dto';
import { CreateResourcePipe } from '../../shared/create-resource.pipe';
import { UpdateResourcePipe } from '../../shared/update-resource.pipe';
import { SearchUsersDto } from './dto/search-users.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UsePipes(CreateResourcePipe, ValidationPipe)
  @GrpcMethod('UsersService', 'create')
  async create(data: CreateUserDto): Promise<UserDocument> {
    return await this.usersService.create(data);
  }

  @UsePipes(ValidationPipe)
  @GrpcMethod('UsersService', 'search')
  async search(data: SearchUserDto): Promise<SearchUsersDto> {
    return await this.usersService.search(data);
  }

  @UsePipes(ValidationPipe)
  @GrpcMethod('UsersService', 'find')
  async find(data: FindUserDto): Promise<UserDocument> {
    return await this.usersService.find(data);
  }

  @UsePipes(UpdateResourcePipe, ValidationPipe)
  @GrpcMethod('UsersService', 'update')
  async update(data: UpdateUserDto): Promise<UserDocument> {
    return await this.usersService.update(data);
  }

  @UsePipes(ValidationPipe)
  @GrpcMethod('UsersService', 'remove')
  async remove(data: RemoveUserDto): Promise<UserDocument> {
    return await this.usersService.remove(data);
  }
}
