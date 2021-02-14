import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment, PaymentDocument } from './entities/payment.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { SearchPaymentDto } from './dto/search-payment.dto';
import { FindPaymentDto } from './dto/find-payment.dto';
import { RemovePaymentDto } from './dto/remove-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    try {
      const createdPayment = await this.paymentModel.create(createPaymentDto);

      return await createdPayment.save();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async search(filters: SearchPaymentDto) {
    try {
      return {
        payments: await this.paymentModel
          .find(filters)
          .populate('wallet')
          .exec(),
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async find({ _id }: FindPaymentDto) {
    try {
      return await this.paymentModel.findOne({ _id }).populate('wallet').exec();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(updatePaymentDto: UpdatePaymentDto) {
    try {
      const { _id } = updatePaymentDto;

      await this.paymentModel.updateOne({ _id }, updatePaymentDto).exec();

      return await this.find({ _id });
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove({ _id }: RemovePaymentDto) {
    try {
      const removed = await this.find({ _id });

      await this.paymentModel.deleteOne({ _id }).exec();

      return removed;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
