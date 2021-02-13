import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Wallet, WalletDocument } from './entities/wallet.entity';
import { Model } from 'mongoose';
import { SearchWalletDto } from './dto/search-wallet.dto';
import { FindWalletDto } from './dto/find-wallet.dto';
import { RemoveWalletDto } from './dto/remove-wallet.dto';

@Injectable()
export class WalletsService {
  constructor(
    @InjectModel(Wallet.name) private walletModel: Model<WalletDocument>,
  ) {}

  async create(createWalletDto: CreateWalletDto) {
    try {
      const createdWallet = await this.walletModel.create(createWalletDto);

      return await createdWallet.save();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async search(filters: SearchWalletDto) {
    try {
      return {
        wallets: await this.walletModel
          .find(filters)
          .populate('user')
          .populate('recharges')
          .exec(),
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async find({ _id }: FindWalletDto) {
    try {
      return await this.walletModel
        .findOne({ _id })
        .populate('user')
        .populate('recharges')
        .exec();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(updateWalletDto: UpdateWalletDto) {
    try {
      const { _id } = updateWalletDto;

      await this.walletModel.updateOne({ _id }, updateWalletDto).exec();

      return await this.find({ _id });
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove({ _id }: RemoveWalletDto) {
    try {
      const removed = await this.find({ _id });

      await this.walletModel.deleteOne({ _id }).exec();

      return removed;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
