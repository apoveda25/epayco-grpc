import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { SearchUserDto } from './dto/search-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { RemoveUserDto } from './dto/remove-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const createdUser = await this.userModel.create(createUserDto);

      return await createdUser.save();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async search(filters: SearchUserDto) {
    try {
      return { users: await this.userModel.find(filters).exec() };
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async find({ _id }: FindUserDto) {
    try {
      return await this.userModel.findOne({ _id }).exec();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(updateUserDto: UpdateUserDto) {
    try {
      const { _id } = updateUserDto;

      await this.userModel.updateOne({ _id }, updateUserDto).exec();

      return await this.find({ _id });
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove({ _id }: RemoveUserDto) {
    try {
      const removed = await this.find({ _id });

      await this.userModel.remove({ _id }).exec();

      return removed;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
