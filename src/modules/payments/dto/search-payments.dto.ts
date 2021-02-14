import { PaymentDocument } from '../entities/payment.entity';

export interface SearchPaymentsDto {
  payments: PaymentDocument[];
}
