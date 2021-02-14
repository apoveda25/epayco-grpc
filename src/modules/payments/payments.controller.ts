import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { CreateResourcePipe } from '../../shared/pipes/create-resource.pipe';
import { UpdateResourcePipe } from '../../shared/pipes/update-resource.pipe';
import { PaymentDocument } from './entities/payment.entity';
import { SearchPaymentDto } from './dto/search-payment.dto';
import { SearchPaymentsDto } from './dto/search-payments.dto';
import { FindPaymentDto } from './dto/find-payment.dto';
import { RemovePaymentDto } from './dto/remove-payment.dto';
import { CodeGeneratePipe } from './pipes/code-generate.pipe';

@Controller()
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @UsePipes(CreateResourcePipe, CodeGeneratePipe, ValidationPipe)
  @GrpcMethod('PaymentsService', 'create')
  async create(data: CreatePaymentDto): Promise<PaymentDocument> {
    return await this.paymentsService.create(data);
  }

  @UsePipes(ValidationPipe)
  @GrpcMethod('PaymentsService', 'search')
  async search(data: SearchPaymentDto): Promise<SearchPaymentsDto> {
    return await this.paymentsService.search(data);
  }

  @UsePipes(ValidationPipe)
  @GrpcMethod('PaymentsService', 'find')
  async find(data: FindPaymentDto): Promise<PaymentDocument> {
    return await this.paymentsService.find(data);
  }

  @UsePipes(UpdateResourcePipe, ValidationPipe)
  @GrpcMethod('PaymentsService', 'update')
  async update(data: UpdatePaymentDto): Promise<PaymentDocument> {
    return await this.paymentsService.update(data);
  }

  @UsePipes(ValidationPipe)
  @GrpcMethod('PaymentsService', 'remove')
  async remove(data: RemovePaymentDto): Promise<PaymentDocument> {
    return await this.paymentsService.remove(data);
  }
}
