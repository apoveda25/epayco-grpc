import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRechargeDto } from './dto/create-recharge.dto';
import { UpdateRechargeDto } from './dto/update-recharge.dto';
import { Recharge, RechargeDocument } from './entities/recharge.entity';
import { SearchRechargeDto } from './dto/search-recharge.dto';
import { FindRechargeDto } from './dto/find-recharge.dto';
import { RemoveRechargeDto } from './dto/remove-recharge.dto';

@Injectable()
export class RechargesService {
  constructor(
    @InjectModel(Recharge.name) private rechargeModel: Model<RechargeDocument>,
  ) {}

  async create(createRechargeDto: CreateRechargeDto) {
    try {
      const createdRecharge = await this.rechargeModel.create(
        createRechargeDto,
      );

      return await createdRecharge.save();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async search(filters: SearchRechargeDto) {
    try {
      return {
        recharges: await this.rechargeModel
          .find(filters)
          .populate('wallet')
          .exec(),
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async find({ _id }: FindRechargeDto) {
    try {
      return await this.rechargeModel
        .findOne({ _id })
        .populate('wallet')
        .exec();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(updateRechargeDto: UpdateRechargeDto) {
    try {
      const { _id } = updateRechargeDto;

      await this.rechargeModel.updateOne({ _id }, updateRechargeDto).exec();

      return await this.find({ _id });
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove({ _id }: RemoveRechargeDto) {
    try {
      const removed = await this.find({ _id });

      await this.rechargeModel.deleteOne({ _id }).exec();

      return removed;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
